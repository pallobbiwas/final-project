import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ refetch, user: { email, role } }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('successfull make an admin');
        refetch();
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make admin
          </button>
        ): <p className="text-green-600">Allready make admin</p>}
      </td>
      <td>
        <button class="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
