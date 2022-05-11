import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppoinmentBanner = ({date, setdate}) => {

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div>
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentis chair"
          />
        </div>
        <div>
          <DayPicker mode="single" selected={date} onSelect={setdate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
