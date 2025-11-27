const CurrentWeather = ({ data }) => {
    const { name, main, weather } = data;

    const desc = weather[0].description;
    const icon = weather[0].icon;

    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="current-card glass">
        <h2 className="day">{date}</h2>
        <h3 className="location">{name}</h3>

        <div className="temp-section">
            <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
            />
            <h1 className="temp">{Math.round(main.temp)}°C</h1>
        </div>

        <p className="description">{desc}</p>
        </div>
    );
};

export default CurrentWeather;
