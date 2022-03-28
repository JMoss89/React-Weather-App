import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/ForecastSummary.css";

function ForecastSummary({ date, description, icon, temperature, onSelect }) {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__container">
        <div className="forecast-summary__container-1">
          <div className="forecast-summary__date">
            {moment(date).format("ddd Do MMM")}
          </div>
          <div className="forecast-summary__icon" data-testid="forecast-icon">
            <WeatherIcon name="owm" iconId={icon} />
          </div>
          <div className="forecast-summary__container-2">
            <div className="forecast-summary__temperature">
              {temperature.max}
              &deg;C
            </div>
          </div>
          <div className="forecast-summary__description">{description}</div>
          <button type="button" onClick={() => onSelect(date)}>
            More details
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
