import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from '../assets/Rainy.svg';
import cloudy from '../assets/Cloudy.svg';
import partlyCloudy from '../assets/PartlyCloudy.svg';

function WeatherCard(props) {
 const imgSrc = props.checkWeather(props.city);
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src={imgSrc}alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.city.city}</h3>
            <h5 className="card-text">{props.city.temperature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;

