import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilterOn, selectFilterVal, selectSearchOn, selectSearchVal } from '../features/countriesSlice';
import CountryCard from './CountryCard';
import './CountryList.css';

function CountryList() {
    const [countries, setCountries] = useState([]);

    const filterOn = useSelector(selectFilterOn);
    const filterVal = useSelector(selectFilterVal);
    const searchOn = useSelector(selectSearchOn);
    const searchVal = useSelector(selectSearchVal);

    useEffect(() => {
        if (searchOn) {
            fetchCountries("https://restcountries.com/v2/name/" + searchVal);
        } else if (filterOn) {
            fetchCountries("https://restcountries.com/v2/region/" + filterVal);
        } else {
            fetchCountries("https://restcountries.com/v2/all");
        }
    }, [searchOn, searchVal, filterOn, filterVal]);

    function fetchCountries(apiUrl) {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setCountries(data);
        })
        .catch(error => alert(error));
    }

    return (
        <div className="countryList">
            {countries.map(({ alpha3Code, flags: { svg }, name, population, region, capital }) => (
                <CountryCard 
                    id={alpha3Code}
                    flag={svg} 
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                />
            ))}
        </div>
    );
}

export default CountryList;
