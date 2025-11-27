import React from "react";

const SearchBar = ({ city, setCity, fetchWeather }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") fetchWeather();
    };

    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather}>Search</button>
        </div>
    );
};

export default SearchBar;
