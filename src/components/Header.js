import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '../features/darkmodeSlice';
import Button from '@mui/material/Button';
import './Header.css';

function Header() {
    const dispatch = useDispatch();
    const darkmode = useSelector(selectDarkMode);

    return (
        <div className="header">
            <h1>Where in the World?</h1>
            <Button 
                onClick={() => dispatch(toggleDarkMode())}
                className="header__btn"
                variant="text" 
                color="secondary"
                startIcon={ (darkmode) ? (<ion-icon name="moon-sharp"></ion-icon>) : (<ion-icon name="moon-outline"></ion-icon>)}
            >
                Dark Mode
            </Button>
        </div>
    );
}

export default Header;
