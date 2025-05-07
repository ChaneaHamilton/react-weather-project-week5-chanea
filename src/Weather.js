import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div clasName="col-8">
            <input
              text="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lehi, UT</h1>
      <ul>
        <li>Wednesday 07:00am</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          15°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 54% </li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
