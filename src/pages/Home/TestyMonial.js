import React from "react";
import quite from "../../assets/icons/quote.svg";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const TestyMonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Wison Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person1,
    },
    {
      _id: 3,
      name: "Wison Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person2,
    },
    {
      _id: 2,
      name: "Wison Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person3,
    },
  ];
  return (
    <section className="mt-16 container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48 " src={quite} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
        {reviews.map((r) => (
          <ReviewCard key={r._id} review={r}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default TestyMonial;
