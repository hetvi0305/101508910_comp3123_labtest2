# Weather App — COMP3123 Lab Test 2
Student: Hetvi Patel  
Student ID: 10158910  
Project Name: 101508910_comp3123_labtest2

------------------------------------------------------------

## Project Overview
This project is a simple React Weather App that allows users to search for any city and view:

- Current weather conditions
- Temperature
- Weather description and icon
- 5-day forecast
- Forecast humidity and wind speed

The application uses the OpenWeatherMap API and demonstrates React concepts such as state, props, hooks, and component-based design.

------------------------------------------------------------

## Live Demo (Vercel Deployment)
URL: (https://101508910comp3123labtest2vercel.vercel.app/)

------------------------------------------------------------

## Features

### Current Weather
- City name
- Date (weekday, month, year)
- Temperature in Celsius
- Weather description
- Weather icon

### 5-Day Forecast
- Daily weather icon
- Minimum and maximum temperature
- Weather description
- Humidity percentage
- Wind speed (km/h)

### Search Functionality
- Search by any city name
- Displays updated current weather and forecast
- Error handling for invalid or unknown cities

### UI/UX
- Clean and simple layout
- Glass-style card design
- Responsive grid layout

------------------------------------------------------------

## Technologies Used
- React
- Axios (API fetching)
- OpenWeatherMap API
- CSS for styling
- Vercel for deployment

------------------------------------------------------------

## API Endpoints Used

### Current Weather
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### 5-Day Forecast
```
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

------------------------------------------------------------

## Project Structure

```
project-root/
│
├── public/
│   ├── index.html
│   └── background.jpg
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── CurrentWeather.jsx
│   │   └── Forecast.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.js
│
├── .env
├── package.json
└── README.md
```


------------------------------------------------------------

## Installation and Setup

1. Clone the repository:
```
   git clone https://github.com/hetvi0305/101508910_comp3123_labtest2.git
   cd 101508910_comp3123_labtest2
```

3. Install dependencies:
```
   npm install
```

4. Create a .env file in the project root and add:
```
   REACT_APP_WEATHER_KEY=your_api_key_here
```

5. Start the development server:
```
   npm start
```

------------------------------------------------------------

## Deployment (Vercel)

1. Push project to GitHub
2. Log into Vercel (via GitHub)
3. Click "New Project" and import your repo
4. Add environment variable:
```
    REACT_APP_WEATHER_KEY = your_api_key_here
```
5. Click "Deploy"
6. Copy the public URL and add it in this README

------------------------------------------------------------

## Screenshots
- Current weather screen:
  <img width="1919" height="973" alt="Screenshot 2025-11-27 114958" src="https://github.com/user-attachments/assets/d79148b1-07e5-4bab-97dc-a9aac9e01895" />

- Different City screen:
  <img width="1919" height="973" alt="Screenshot 2025-11-27 115015" src="https://github.com/user-attachments/assets/6f647b59-fccc-46cc-9f2b-02a0b549dd78" />

- Invalid City validation:
  <img width="1919" height="969" alt="Screenshot 2025-11-27 115212" src="https://github.com/user-attachments/assets/0400b4a5-5c6f-4ef4-9a77-1a6c11c9ea62" />
  <img width="1918" height="968" alt="Screenshot 2025-11-27 115234" src="https://github.com/user-attachments/assets/19ce23d4-e418-43ef-9fbd-f93045760444" />

------------------------------------------------------------

## Notes
- Uses metric units (°C)
- Requires a valid OpenWeatherMap API key
- The .env file is not included in GitHub for security reasons

------------------------------------------------------------

## Submission Checklist
- GitHub repository created
- React project running
- OpenWeatherMap API integrated
- README file added
- Vercel deployment completed
- Screenshots included
