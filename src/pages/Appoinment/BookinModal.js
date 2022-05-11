import { format } from "date-fns";
import React from "react";

const BookinModal = ({ setTreatment, date, treatment: { name, slots } }) => {
  const fromSubmit = (e) => {
    e.preventDefault();
    setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">
            Bookinig for: {name}{" "}
          </h3>
          <div>
            <form
              onSubmit={fromSubmit}
              className=" my-6 grid grid-cols-1 gap-3 justify-items-center"
              action=""
            >
              <input
                readOnly
                name="day"
                type="text"
                value={format(date, "PP")}
                class="input input-bordered w-full max-w-xs"
              />
              <select
                name="time"
                class="select select-bordered w-full max-w-xs"
              >
                {slots?.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                placeholder="Full name"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                name="phoneanumber"
                type="text"
                placeholder="Phone number"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs"
              />
              <br />
              <input className="btn btn-secondary" type="submit" />
            </form>
          </div>
          <div class="modal-action">
            <label for="booking-modal" class="btn">
              Dismis
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookinModal;
