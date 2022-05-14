import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import BookinModal from "./BookinModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, 'PP')

  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-primary text-2xl">
        Available appoinment for : {format(date, "PP")}
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        {services.map((s) => (
          <Service
            key={s._id}
            service={s}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      <div>
        {treatment && <BookinModal treatment={treatment} setTreatment={setTreatment} date={date}></BookinModal>}
      </div>
    </div>
  );
};

export default AvailableAppointment;
