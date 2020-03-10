import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchField, searchChange}) => {
    return(
        <div className="pa1">
            <input
                className="searchBox"
                type="search"
                placeholder="Search Career Tips Here"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;