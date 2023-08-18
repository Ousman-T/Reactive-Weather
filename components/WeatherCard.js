import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from '../assets/Rainy.svg';
import cloudy from '../assets/Cloudy.svg';
import partlyCloudy from '../assets/PartlyCloudy.svg';

function WeatherCard(props) {

  const checkWeather = () => {
    let imgSrc;
    if(props.city.forecast === "Sunny"){
      imgSrc = sunny;
    }else if(props.city.forecast === 'Rainy'){
      imgSrc = rainy;
    }else if (props.city.forecast === 'Cloudy'){
      imgSrc = cloudy;
    }else if(props.city.forecast === 'Partly cloudy'){
      imgSrc = partlyCloudy;
    }else{
      imgSrc = null;
    }
    return imgSrc;
  }
  const imgSrc = checkWeather();
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
// module.exports = {WeatherCard};
export default WeatherCard;

