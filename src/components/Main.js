import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { turnFilterOff, turnFilterOn, turnSearchOff, turnSearchOn } from '../features/countriesSlice';
import { Button } from '@mui/material';
import './Main.css';
import CountryList from './CountryList';

function Main() {
    const [menu, setMenu] = useState(false);
    const [menuLabel, setMenuLabel] = useState("Filter by Region");

    const dispatch = useDispatch();
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            dispatch(turnSearchOn(event.target.value));
        }
        if (event.target.value === "") {
            dispatch(turnSearchOff());
        }
    }
    const handleFilter = (value) => {
        setMenu(false);
        if (value === null) {
            dispatch(turnFilterOff());
            setMenuLabel("Filter by Region");
        } else {
            dispatch(turnFilterOn(value));
            setMenuLabel(value);
        }
    }

    return (
        <div className="main">
            <div className="main__header">
                <div className="main__search">
                    <ion-icon name="search-sharp"></ion-icon>
                    <input 
                        onKeyDown={(event) => handleSearch(event)}
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Search for a country..." 
                    />
                </div>

                <div className="main__filter">
                    <Button 
                        className="main__filterBtn" 
                        onClick={() => setMenu(!menu)}
                        endIcon={<ion-icon name="chevron-down-sharp"></ion-icon>}
                    >
                        {menuLabel}
                    </Button>
                    <ul onClick={() => setMenu(false)} className={`main__filterOptions ${menu && "active"}`}>
                        <li onClick={() => handleFilter(null)}>All</li>
                        <li onClick={() => handleFilter("africa")}>Africa</li>
                        <li onClick={() => handleFilter("americas")}>Americas</li>
                        <li onClick={() => handleFilter("asia")}>Asia</li>
                        <li onClick={() => handleFilter("europe")}>Europe</li>
                        <li onClick={() => handleFilter("oceania")}>Oceania</li>
                    </ul>
                </div>
            </div>

            <div className="main__body">
                <CountryList />
            </div>
        </div>
    );
}

export default Main;
