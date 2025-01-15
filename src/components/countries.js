import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
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
                {data.map((country, index) => (
                    <Card key={index} country={country}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
