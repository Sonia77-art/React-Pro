import { useState } from "react";

export default function Form() {
  const [information, setInformatiom] = useState("true");
  const [submit, setSubmit] = useState("false");
  const informationHandler = () => {
    setInformatiom(true);
    setSubmit(false);
  };
  const submitHandlers = () => {
    setSubmit(false);
    setInformatiom(true);
  };

  return (
    <>
      <div form className="Print-values">
        <border>
          <h4>Contact Information</h4>
          <label for="fname">First Name</label>
          <input type="text" placeholder="Enter Your First Name" />
          <br />
          <label for="fname">Last Name</label>
          <br />
          <input type="text" placeholder="Enter Your last Name" />
          <label for="fname">Address</label>
          <br />
          <input type="text" />
          <label for="fname">Email</label>
          <input type="text" placeholder="Enter Your Email Address" />
          <br />
          <label for="fname">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Your Number in International format"
          />
          <br />
          <button className="Button" type="submit">
            Submit
          </button>
          <br />
        </border>
      </div>
    </>
  );
}
