import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import './CountryCard.css';

function CountryCard({ id, flag, name, population, region, capital }) {
    const history = useHistory();

    return (
        <CardActionArea key={id} className="countryCard">
            <div onClick={() => history.push(`/country/${id}`)} className="countryCard">
                <img className="countryCard__flag" src={flag} alt="" />
                <div className="countryCard__content">
                    <h2>{name}</h2>
                    <ul>
                        <li>
                            <span>Population: </span>
                            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </li>
                        <li>
                            <span>Region: </span>
                            {region}
                        </li>
                        <li>
                            <span>Capital: </span>
                            {capital}
                        </li>
                    </ul>
                </div>
            </div>
        </CardActionArea>
    );
}

export default CountryCard;
