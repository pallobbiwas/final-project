import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({
  doctor: { name, specialist, img, email },
  index,
  refetch,
}) => {
  const handelDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("successfully delete");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-20 rounded-full" src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{specialist}</td>
      <td>
        <button
          onClick={() => handelDelete(email)}
          class="btn btn-sm text-red-600 font-bold text-2xl"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
