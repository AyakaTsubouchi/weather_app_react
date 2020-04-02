import React, { Component } from 'react';

class Weather extends Component {
  state = {};

  getWeatherByGeo = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const API_KEY = process.env.REACT_APP_OWM_API;
        console.log(process.env.REACT_APP_OWM_API);
        const CurrentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        const apiCall = await fetch(CurrentURL);
        if (apiCall.status !== 200) console.log('something wrong');

        const response = await apiCall.json();
        console.log(response);

        // this.setState({
        //   temperature: response.main.temp,
        //   city: response.name,
        //   country: response.sys.country,
        //   humidity: response.main.humidity,
        //   description: response.weather[0].description,
        //   error: ''
        // });
        // console.log(this.state);
      });
    } else {
      console.log('geolocation IS NOT available');
    }
  };

  getWeatherByCity = () => {};

  render() {
    return (
      <div>
        <button onClick={this.getWeatherByGeo}>CLICK</button>
      </div>
    );
  }
}
export default Weather;
