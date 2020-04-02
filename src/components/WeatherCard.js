import React, { Component } from 'react';

const WeatherCard = props => {
  console.log(props);
  return (
    <div className="section weather-card">
      <div className="card blue-grey darken-4">
        <div className="container center green-text lighten-2">
          <div className="row">
            <p>{props.city}</p>
          </div>
          <div className="row">
            <div className="col s1 m6 l6">
              <p>weather icon</p>
            </div>
            <div className="col s1 m6 l6">
              <div className="row">
                <p>
                  {props.tempMax}/{props.tempMin}
                </p>
              </div>
              <div className="row">
                <p>{props.description}</p>
              </div>
              <div className="row">
                <p>{props.humidity}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>Today's mission:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
