import React from "react";

const InfoCard = ({ img, cardTitle, bgclassName }) => {
  return (
    <div className={`card lg:card-side shadow-xl p-4 text-white ${bgclassName}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
