import React from "react";
import appoinment from '../../assets/images/appointment.png';
import doctors from "../../assets/images/doctor.png";
import MainButton from "../Shared/MainButton";

const MakeAppoinment = () => {
  return (
    <section style={{background: `url(${appoinment})`}} className="flex items-center mt-40 container mx-auto">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctors} alt="" />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-xl text-primary my-3">Appoinment</h3>
        <hr />
        <h2 className="text-3xl text-white my-3">Make appoinment Today</h2>
        <p className="text-white my-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <MainButton>Get Start</MainButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
