import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class Weather extends Component {
  state = {};

  getWeatherByGeo = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const API_KEY = process.env.REACT_APP_OWM_API;
        const CurrentURL = `https://api.openweathermap.org/data/2.5/weather?`;
        const byGeo = `${CurrentURL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        const apiCall = await fetch(byGeo);
        if (apiCall.status !== 200) console.log('something wrong');

        const response = await apiCall.json();
        console.log(response);

        this.setState({
          tempMax: response.main.temp_max,
          tempMin: response.main.temp_min,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ''
        });
        console.log(this.state);
      });
    } else {
      console.log('geolocation IS NOT available');
    }
  };

  //   handleInput = e => {
  //     this.setState({
  //       city: e.target.value
  //     });
  //   };
  getWeatherByCity = async () => {
    //if form value is not null
    const city = 'London';
    const API_KEY = 'a9d26cdce59f235872922cf298bfdd24';
    const CurrentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const apiCall = await fetch(CurrentURL);
    if (apiCall.status !== 200) console.log('something wrong');

    const response = await apiCall.json();
    console.log(response);

    this.setState({
      tempMax: response.main.temp_max,
      tempMin: response.main.temp_min,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ''
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button onClick={this.getWeatherByCity}>CLICK</button>
        <WeatherCard
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}
export default Weather;
