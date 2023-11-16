import React from "react";

const SearchBox = ({searchChange}) => {
  return( 
            <div className="">
                <input 
                    onChange={searchChange}
                    type="search" 
                    placeholder="Search Employees"
                />
            </div>
        );
};

export default SearchBox;
