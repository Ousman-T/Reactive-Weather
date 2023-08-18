import React from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard';
import cities from './data';
import { useState } from 'react';
import Location from './components/Location'


function App() {
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
    
    const [location, setLocation] = useState("New York City");
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((city, index) => (
                    <WeatherCard key={index} city={city}/>
                ))}
                


            </div>
            <Location data={cities} location={location} setLocation={setLocation} checkWeather={checkWeather}/>
            
        </>
    )
}

export default App;