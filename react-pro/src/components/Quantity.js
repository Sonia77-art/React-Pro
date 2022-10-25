import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(1);

  return (
    <>
      <p className= "P" >Quantity :</p>
      <button onClick={() => {
        setNumber(number + 1);
         }}>{number}</button>
    </>
  )
}
        
    