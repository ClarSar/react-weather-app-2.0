import React, {useState} from "react";
import axios from "axios"
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather (props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse (response) {
    console.log(response.data);
    
    setWeatherData({
        ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
      percipitation: 72,
      humidity: response.data.main.humidity

    });

    
}

if  (weatherData.ready) {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a City" className="form-control" autoFocus= "on" />
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
        </form>
        <h1 className="mt-3">{weatherData.city}</h1>
        <ul>
            <li>
             <FormattedDate date={weatherData.date}/>
            </li>
            <li className= "text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className= "clearfix">
                <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
               <div className="float-left">
                <span className= "temperature">{Math.round(weatherData.temperature)}</span> <span className="unit">C</span>
            </div>
            </div> 
            </div>
            
           
            <div className="col-6">
                <ul>
                    <li>Percipitation: {weatherData.percipitation}%</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind}mph</li>
                </ul>
            </div>
        </div>
        </div>
        );
    
} else {

const apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";

    
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading..."

}
}

    
    