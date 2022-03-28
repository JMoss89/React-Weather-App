import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("LocationDetails", () => {
  const singleForecast = {
    date: 1525046400000,
    icon: 800,
    temperature: {
      max: 23,
      min: 18,
    },
    description: "Cloudy",
  };
  const onSelect = () => {};

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct date", () => {
    render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );
    const dateElement = screen.getByText(/Mon 30th Apr/i);

    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveClass("forecast-summary__date");
  });

  it("renders icon correctly", () => {
    render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );
    const iconElement = screen.getByTestId("forecast-icon");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("forecast-summary__icon");
  });

  it("renders the correct temperature", () => {
    render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );
    const tempElement = screen.getByText(/23/);

    expect(tempElement).toBeInTheDocument();
    expect(tempElement).toHaveClass("forecast-summary__temperature");
  });

  it("renders the correct description", () => {
    render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );
    const descriptionElement = screen.getByText("Cloudy");

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass("forecast-summary__description");
  });

  it("renders button", () => {
    render(
      <ForecastSummary singleForecast={singleForecast} onSelect={onSelect} />
    );
    const buttonElement = screen.getByText("More details");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("forecast-summary__button");
  });
});