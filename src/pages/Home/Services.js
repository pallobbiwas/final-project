import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import apponmetimg from '../../assets/images/treatment.png';
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      discribtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Fluoride Treatment",
      discribtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      discribtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h3 className="text-primary font-bold text-3xl">Our services</h3>
        <h2 className=" text-4xl font-bold">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {services.map((s) => (
          <Service key={s._id} service={s}></Service>
        ))}
      </div>
      <div className=" px-36 ">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-2/6">
            <img
              src={apponmetimg}
              alt="Album"
            />
          </figure>
          <div className="card-body w-4/6">
            <h2 className="card-title text-4xl">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
