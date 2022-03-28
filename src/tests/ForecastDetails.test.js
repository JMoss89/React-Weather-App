import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails component", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      max: 23,
      min: 15,
    },
    humidity: 89,
    wind: {
      speed: 12,
      direction: "N",
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecastDetail={validProps} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct date", () => {
    render(<ForecastDetails forecastDetail={validProps} />);
    const dateElement = screen.getByText(/Mon 30th Apr/i);

    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveClass("forecast-details__date");
  });

  it("renders correct max temperature", () => {
    render(<ForecastDetails forecastDetail={validProps} />);
    const maxTempElement = screen.getByText(/23/i);

    expect(maxTempElement).toBeInTheDocument();
    expect(maxTempElement).toHaveClass("forecast-details__max-temp");
  });

  it("renders correct min temperature", () => {
    render(<ForecastDetails forecastDetail={validProps} />);
    const minTempElement = screen.getByText(/15/);

    expect(minTempElement).toBeInTheDocument();
    expect(minTempElement).toHaveClass("forecast-details__min-temp");
  });

  it("renders correct humidity", () => {
    render(<ForecastDetails forecastDetail={validProps} />);
    const humidityElement = screen.getByText(/89%/i);

    expect(humidityElement).toBeInTheDocument();
    expect(humidityElement).toHaveClass("forecast-details__humidity");
  });

  it("renders correct wind", () => {
    render(<ForecastDetails forecastDetail={validProps} />);
    const windElement = screen.getByText(/12mph N/i);

    expect(windElement).toBeInTheDocument();
    expect(windElement).toHaveClass("forecast-details__wind");
  });
});