import React from "react";

const toCelsius = value => value;

const BigWeather = ({name, temp, date, format}) => (
  <p>
    <span>Name: {name}</span>
    <br />
    <span>
      Temp: {format === "farenheit" ? temp + " F" : toCelsius(temp) + " C"}
    </span>
    <br />
    <span>Date: {new Date(date * 1000).toDateString()}</span>
  </p>
);

export default BigWeather;
