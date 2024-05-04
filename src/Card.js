import React from "react";

const Card = (props) => {
  const { name, exp, special, fee, setModalOpen, time, isFree } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h2>{name}</h2>
        <span>{exp}+ years experience</span>
        <h4>Specialist in {special} </h4>
        <p className="fee">
          Consulation Charge: <span>₹ {fee}</span>
        </p>
        <div className="slot">
          <h5>Avaialable Booking Slot: </h5>
          <span>{isFree ? time : "NA"}</span>
        </div>
        <h3>About the Doctor</h3>
        <p>
          {name} as your healthcare provider, you can rest assured that you're
          in the best of hands. At Apollo Hospitals, {name} and our entire team
          are committed to providing personalized, compassionate care that
          exceeds your expectations.
        </p>
        {isFree ? (
          <button className="btn" onClick={() => setModalOpen(true)}>
            Schedule Appointment
          </button>
        ) : (
          <button className="btn not-available">
            Appointments not avaialble
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
