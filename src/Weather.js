import React, {useState} from "react";
import axios from "axios"

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

function handleResponse (response) {
    
    setWeatherData({
    ready:true,
    coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      city: response.data.name,
      humidity: response.data.main.humidity

    });
  
}

function search() {
const apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

}

function searchLocation(position) {
let lat= position.coordinates.lat;
let lon= position.coordinates.lon;
let apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleSubmitPosition);
}
  
  
  function handleSubmitPosition(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchLocation);
  }



function handleSubmit(event){
    event.preventDefault();
    search();

}

function handleCityChange(event) {
setCity(event.target.value);
}


if  (weatherData.ready) {
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
            <input type="search" placeholder="Enter a City" className="form-control" autoFocus= "on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        
        
        <div className="col-3">
                <button
                onClick={handleSubmitPosition}
                  className="btn btn-secondary w-100"
                  type="submit"
                  
                >
                  <i className="fa-solid fa-location-arrow"></i>
                </button>
       </div>   
    </div>
</form>

        <WeatherInfo data={weatherData} />
       <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
        );
    
} else {

search(); 

return "Loading..."



}
}

    
    