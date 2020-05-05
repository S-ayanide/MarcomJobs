import React, {useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import './SearchBox.css';

const SearchBox = ({ placeholder, getUserSearch}) => {

    const [userSearch, setUsetSearch] = useState("")

    const onSearchChange = (event) => {
        setUsetSearch(event.target.value)
    }

    return(
        <div class="container-1">                
            <input 
                type="search" 
                id="search" 
                placeholder={placeholder}
                onChange={onSearchChange}
            />
            <button 
                class="icon" 
                onClick={() => getUserSearch(userSearch)}  
                ><IoIosSearch /></button>
        </div>        
        // <div className="pa1">
        //     <input
        //         className="searchBox"
        //         style={{width: `${width}%`}}
        //         type="search"
        //         placeholder="Search Career Tips Here"
        //         onChange={searchChange}
        //     />
        // </div>
    );
}

export default SearchBox;