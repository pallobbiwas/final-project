import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Alluser = () => {
  const { data: user, isLoading, refetch } = useQuery("user", () =>
    fetch("http://localhost:5000/alluser",{
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>all user: {user?.length}</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {
                  user.map(u => <UserRow key={u._id} user={u} refetch={refetch}></UserRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
