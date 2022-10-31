import { useState } from "react";
import "../App.css";
import Order from "./Order";

export default function Form() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const handleInformationClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="Form">
      {isFormVisible ? (
        <form className="Print-values">
          <h6 classname="Info">ORDER HERE</h6>
          <label for="fname">First Name </label>
          <br />
          <input type="text" placeholder="Enter Your First Name" />
          <br />
          <label for="fname">Last Name </label>
          <br />
          <input type="text" placeholder="Enter Your last Name" />
          <br />
          <label for="fname">Address </label>
          <br />
          <input type="text" placeholder="Enter your address" />
          <br />
          <label for="fname">Email</label>
          <br />
          <input type="text" placeholder="Enter Your Email Address" />
          <br />
          <label for="fname">Phone Number </label>
          <br />
          <input type="number" placeholder="Enter Your Number" />
          <Order />
          <br />
          <button
            className="Button"
            type="submit"
            onClick={handleInformationClick}
          >
            SUBMIT
          </button>
          <br />
          <br />
        </form>
      ) : (
        <div>
          <h5>
            Thank You !
            <br />
            Your Order has been placed!
          </h5>
          <br />
          <button
            className="change input"
            onClick={() => setIsFormVisible(true)}
          >
            BACK
          </button>
        </div>
      )}
    </div>
  );
}
