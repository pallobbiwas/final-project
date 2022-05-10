import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center mt-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="" src={review.img} />
            </div>
          </div>
          <div className="ml-5">
            <h2 className="card-title">{review.name}</h2>
            <h4>{review.country}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
