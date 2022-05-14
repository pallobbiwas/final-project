import React from "react";

const Service = ({ setTreatment, service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card w-96 bg-secondary text-primary-content mx-auto">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>
            {slots?.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-700">No appoinment available</span>
            )}
          </p>
          <div class="card-actions justify-center mt-4">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots?.length === 0}
              for="booking-modal"
              className="modal-button btn px-20"
            >
              BOOK APPOINMENT
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
