import React from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = React.useState({
    name: "",
    contact: "",
    gender: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    alert("Details Submitted, you'll get a call for confirmation");
    navigate("/");
  };

  const formOnchange = (value, key) => {
    setFormValues({ ...formValues, [key]: value });
  };
  return (
    <div>
      <h1 className="intro-text">Appointment Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            Full name:
            <input
              type="text"
              required
              placeholder="Full name"
              value={formValues.name}
              onChange={(e) => formOnchange(e.target.value, "name")}
            />
          </label>
        </div>
        <div className="form-input">
          <label>
            Mobile Number:
            <input
              type="number"
              required
              placeholder="Contact"
              value={formValues.contact}
              onChange={(e) =>
                formOnchange(e.target.value.replace(/\D/g, ""), "contact")
              }
            />
          </label>
        </div>
        <div className="form-input">
          <label>
            Gender:
            <div className="radio-grp">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={formValues.gender === "male"}
                  onChange={(e) => formOnchange(e.target.value, "gender")}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={formValues.gender === "female"}
                  onChange={(e) => formOnchange(e.target.value, "gender")}
                />
                Female
              </label>
            </div>
          </label>
        </div>
        <div className="form-input">
          <label>
            Date of Appoinment:
            <input
              type="date"
              required
              value={formValues.date}
              onChange={(e) => formOnchange(e.target.value, "date")}
            />
          </label>
        </div>
        <div className="btn-grp">
          <button
            type="reset"
            onClick={() =>
              setFormValues({ name: "", contact: "", gender: "", date: "" })
            }
            className="btn btn-lyt"
          >
            Clear
          </button>
          <button type="submit" className="btn">
            Book Appoinment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
