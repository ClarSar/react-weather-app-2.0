import React from "react";
import "./Weather.css";

export default function Weather () {
    return <div className="Weather">
        <form>
            <input type="search" placeholder="Enter a City" className="form-control"/>
        <input type="submit" value="Search" className="btn btn-primary"/>
        </form>
        <h1>Lisbon</h1>
        <ul>
            <li>
                Wednesday 07:00
            </li>
            <li>Mostly CLoudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Percipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13mph</li>
                </ul>
            </div>
        </div>
        </div>;
}