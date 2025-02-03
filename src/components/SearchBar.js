import React, { useState } from "react";
import { Input } from "antd";
import { useDispatch } from 'react-redux';
import { setCityName, setError } from '../utils/weatherSlice'

const SearchBar = () => {
    const dispatch = useDispatch()        
    const [searchTerm, setSearchTerm] = useState("");
    const { Search } = Input;

    const onSearch = (value) => {
       dispatch(setError(null))
       dispatch(setCityName(value))      
    };

    return (
        <div className="searchBar">
            <Search
                placeholder="Enter City Name"
                onSearch={onSearch}
                enterButton
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;