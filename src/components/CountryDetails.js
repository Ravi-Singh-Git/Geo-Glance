import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import './CountryDetails.css';

function CountryDetails() {
    const { id } = useParams();
    const history = useHistory();
    const empty = {
        "name": "",
        "topLevelDomain": [
            ""
        ],
        "capital": "",
        "subregion": "",
        "region": "",
        "population": 0,
        "borders": [],
        "nativeName": "",
        "flags": {
            "svg": "",
        },
        "currencies": [],
        "languages": [],
    };

    const [country, setCountry] = useState(empty);
    const [allCountries, setAllCountries] = useState([]);

    // https://stackoverflow.com/a/61577142/12302691
    useEffect(() => {
        async function getThisCountry() {
            await fetch(`https://restcountries.com/v2/alpha/${id}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
            })
            .catch((err) => console.log(err));
        }
        async function getAllCountries() {
            await fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => {
                setAllCountries(data);
            })
            .catch((err) => console.log(err));
        }

        getThisCountry();
        getAllCountries();
    }, [id]);

    function getString(array) {
        var str = "";
        for (let i = 0; i < array.length; i++) {
            str += (array[i].name.toString());
            if (i !== array.length - 1) {
                str += ", ";
            }
        }
        return str;
    }

    function getCountryName(countryId) {
        let borderCountry = allCountries.filter((country) => {
            if (country.alpha3Code === countryId) {
                return true;
            } else {
                return false;
            }
        });
        return (borderCountry[0] ? borderCountry[0].name : "");
    }

    return (
        <div className="countryDetails">
            <Button 
                onClick={() => history.push("/")}
                className="countryDetails__btn"
                variant="contained"
                startIcon={<ion-icon name="arrow-back-sharp"></ion-icon>}
            >
                Back
            </Button>

            <div className="countryDetails__content">
                <img src={country.flags.svg} alt="" />
                <div className="countryDetails__details">
                    <h1>{country.name}</h1>

                    <div className="countryDetails__lists">
                        <ul>
                            <li>
                                <span>Native Name: </span>
                                {country.nativeName}
                            </li>
                            <li>
                                <span>Population: </span>
                                {/* https://stackoverflow.com/a/2901298/12302691 */}
                                {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </li>
                            <li>
                                <span>Region: </span>
                                {country.region}
                            </li>
                            <li>
                                <span>Sub Region: </span>
                                {country.subregion}
                            </li>
                            <li>
                                <span>Capital: </span>
                                {country.capital}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Top Level Domain: </span>
                                {country.topLevelDomain}
                            </li>
                            <li>
                                <span>Currencies: </span>
                                {getString(country.currencies || [])}
                            </li>
                            <li>
                                <span>Languages: </span>
                                {getString(country.languages || [])}
                            </li>
                        </ul>
                    </div>

                    <div className="countryDetails__borders">
                        <span>Border Countries: </span>
                        {country.borders ? (
                            <div className="countryDetails__bordersBtn">
                                {country.borders.map((border) => {
                                    return (
                                        <Button onClick={() => history.push(`/country/${border}`)} variant="contained">
                                            {getCountryName(border)}
                                        </Button>
                                    );
                                })}
                            </div>
                        ) : "None"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
