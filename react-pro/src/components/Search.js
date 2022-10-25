
import {useState} from "react";
export default function Search (props) {
    const [searchText, setSearchText] = useState("");
    const handleChange = function (event) {
        setSearchText(event.target.value);
    };
    return (<>
        <input
            type="text"
            className="Search"
            onChange={handleChange}
            value={searchText}
        />
        <p>{searchText && `No "${searchText}" found.`}</p>
    </>);
};
