import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Myappoinment = () => {
  const [appoinment, setAppoinment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
        method:'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            navigate('/')
          }
          return res.json()
        })
        .then((data) => setAppoinment(data));
    }
  }, [user]);

  return (
    <div>
      <h1>my appoinment: {appoinment.length}</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>sl.</th>
                <th>Name</th>
                <th>Date</th>
                <th>Slote</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {appoinment.map((a, index) => (
                <tr>
                  <th>{index+1}</th>
                  <th>{a.patientName}</th>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myappoinment;
