// import cities from "../data";



function Location({ data, location, setLocation, checkWeather }) {
    const found = data.find(city => city.city === location);
    imgSrc = checkWeather(found);
    console.log(location);
    console.log(imgSrc);
    console.log(found);
    if (!found) {
        return <p>Location not found!</p>
    } else {

        return (
            <div className="card">
                <div className="img-container">
                    <h3>Your Location's Weather</h3>

                    <img className="card-img-top" src={imgSrc} alt="Card image cap" id="icon" />
                </div>
                <div class="card-body">
                    <h3 className="card-title">{found.city}</h3>
                    <h5 className="card-text">{found.temperature}</h5>
                    <h5 className="card-text">{found.forecast}</h5>
                </div>
            </div>
        )
    }
}

export default Location;