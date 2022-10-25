import '../App.css';

export default function MyButton(prop) {
    function handleClick(event){
      console.log("Are you sure!");
      alert("Are you sure!");
    }
    return (<button  className="btn" onClick={handleClick}>Order Your Food</button>);
}

    

  