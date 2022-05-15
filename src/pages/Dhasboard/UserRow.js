import React from "react";

const UserRow = ({user:{email}}) => {
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td><button class="btn btn-xs">Make admin</button></td>
      <td><button class="btn btn-xs">Remove</button></td>
    </tr>
  );
};

export default UserRow;
