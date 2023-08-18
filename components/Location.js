// import cities from "../data";



function Location({data, location, setLocation}){
    const found = data.find(city => city.city === location);
    // imgSrc = found ? checkWeather(found.forecast): null;
    return(
        <div className = "card">
        <div className = "img-container">
            <h3>Your Location's Weather</h3>

            <img className="card-img-top" alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{found.city}</h3>
            <h5 className="card-text">{found.temperature}</h5>
            <h5 className="card-text">{found.forecast}</h5>
        </div>
    </div>
    )
}

export default Location;