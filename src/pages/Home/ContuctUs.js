import React from "react";
import backgroundimg from "../../assets/images/appointment.png";

const ContuctUs = () => {
    const fromSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const user = {email,subject, message};
        console.log(user);
        e.target.reset()
    }
  return (
    <div className="mt-10" style={{ background: `url(${backgroundimg})` }}>
      <h1 className="text-center text-primary text-3xl pt-5 mb-8">
        Contuct us
      </h1>
      <div>
        <form onSubmit={fromSubmit} className="text-center py-8" action="">
          <input
            className="w-72 py-2 text-center"
            type="text"
            name="email"
            id=""
            placeholder="email address"
          />
          <br />
          <input
            className="my-3 w-72 py-2 text-center"
            type="text"
            name="subject"
            id=""
            placeholder="subject"
          />
          <br />
          <textarea
            className="text-center"
            name="message"
            id=""
            cols="37"
            rows="3"
            placeholder="your message"
          ></textarea>
          <br />
          <div className="text-center">
            <input className="btn btn-primary mt-3" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContuctUs;
