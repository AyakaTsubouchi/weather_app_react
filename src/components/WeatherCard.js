import React, { Component } from 'react';
import citylist from './citylist.json'

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    city: '',
  };
  handleChange = (e) => {
    this.setState({
      city: e.target.value.toLowerCase(),
    });
    console.log(this.state.city);
  };
  handleClick = () => {
let flag = 0;
  citylist.map(item=>{
 
    if(item.name.toLowerCase()==this.state.city){
      flag = 1
    }
  })
  if(flag===0){
      alert('try again')
    }else{
      alert('let\'s search')
       //this.props.getWeatherByCity(this.state.city);
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="section weather-card">
        <div className="card ">
          <div className="container">
            <div className="row">
              <input
                type="text"
                placeholder={this.props.city}
                onChange={this.handleChange}
                value={this.state.city}
              />
           
            
             
              <button onClick={this.handleClick}>GET WEATHER</button>
              <p>{this.props.city}</p>
            </div>
            <div className="row">
              <div className="col s1 m6 l6">
                <p>weather icon</p>
              </div>
              <div className="col s1 m6 l6">
                <div className="row">
                  <p>
                    {this.props.tempMax}/{this.props.tempMin}
                  </p>
                </div>
                <div className="row">
                  <p>{this.props.description}</p>
                </div>
                <div className="row">
                  <p>{this.props.humidity}</p>
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
  }
}

export default WeatherCard;
