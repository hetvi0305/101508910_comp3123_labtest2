const Forecast = ({ data }) => {
    return (
        <div className="forecast-card glass">
        <h2 className="forecast-title">Weekly Forecast</h2>

        <div className="forecast-grid">
            {data.map((item, index) => {
            const date = new Date(item.dt_txt);
            const day = date.toLocaleDateString("en-US", { weekday: "short" });

            return (
                <div className="forecast-item" key={index}>
                {/* Day */}
                <p className="forecast-day">{day}</p>

                {/* Weather icon */}
                <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="forecast-icon"
                />

                {/* Min / Max Temperature */}
                <p className="forecast-temp">
                    {Math.round(item.main.temp_min)}° / {Math.round(item.main.temp_max)}°
                </p>

                {/* Description */}
                <p className="forecast-desc">
                    {item.weather[0].description}
                </p>

                {/* Wind */}
                <p className="forecast-extra">
                    Wind: {Math.round(item.wind.speed)} km/h
                </p>

                {/* Humidity */}
                <p className="forecast-extra">
                    Humidity: {item.main.humidity}%
                </p>
                </div>
            );
            })}
        </div>
        </div>
    );
};

export default Forecast;
