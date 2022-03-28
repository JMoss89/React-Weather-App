import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__max-temp">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__min-temp">
        Min Temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};
