import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(1);

  return (
    <>
      <h5 className="value">Quantity :</h5>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
    </>
  );
}
