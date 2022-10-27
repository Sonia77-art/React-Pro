import { useState } from "react";
export default function Order() {
  const [to, setTo] = useState("MEAT");
  const [number, setNumber] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${number} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p style={{ fontSize: "15px" }}> To: </p>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Choose">Choose</option>
          <option value="MEAT">MEAT</option>
          <option value="VEGETABLES">VEGETABLES</option>
        </select>
      </label>
      <numberarea
        placeholder="QUANTITY"
        value={1}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="ORDER">Send</button>
    </form>
  );
}
