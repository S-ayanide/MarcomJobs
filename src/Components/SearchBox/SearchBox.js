import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchField, searchChange}) => {
    return(
        <div className="pa1">
            <input
                className="searchBox"
                type="search"
                placeholder="Search News Here"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;