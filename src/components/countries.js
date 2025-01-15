import React, {useEffect, useState} from "react";
import axios from "axios";
const Countries = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setData(res.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        })
    })
    return (
        <div className="countries">
            <h1>COUNTRIES</h1>
            <ul>
                {data.map((country) => (
                    <li key={country.name.common}>
                        {country.name.common}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
