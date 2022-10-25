import '../App.css';
import {useState} from "react";

export default function Menu (props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(event) {
        setIsOpen(!isOpen);
    }
    return (
        <div className="Menu">
            <button className= "Nav-Btn" onClick={handleClick}>{props.text}</button>
            { isOpen && props.children }
            
        </div>
    );
}
