import React, { useState } from "react";
import data from "./data.json";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="intro-text">Book your Appointment</h1>
      <section className="docs-grid">
        {data.map((doc, index) => (
          <Card
            key={index}
            name={doc.name}
            special={doc.specialty}
            avaialble={doc.availability}
            degree={doc.degree}
            exp={doc.exp}
            fee={doc.cost_per_appointment}
            time={doc.availability}
            setModalOpen={setModalOpen}
            isFree={doc.appoint_availble}
          />
        ))}
      </section>
      {modalOpen && <div className="overlay" />}
      <div className={`modal ${modalOpen ? "open" : "close"}`}>
        <h1>Attention!</h1>
        <ul>
          <li>
            Please note the Maximum Appointment time is 20 minutes, if there is
            a necessity to extend, a request can be raised at the reception.
          </li>
          <li>
            This is a one time Appointment and cannot be transferred to another
            person
          </li>
        </ul>
        <div className="btn-grp">
          <button onClick={() => setModalOpen(false)} className="btn btn-lyt">
            Cancel
          </button>
          <button onClick={() => navigate("/appointment")} className="btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
