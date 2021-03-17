import React, {Component, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather.component'
import Form from './components/form.component'
import 'weather-icons/css/weather-icons.css'

const key = 'b2788703be160b952a9a79994fb6485b'

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      max_temp: undefined,
      min_temp: undefined,
      celsius: undefined,
      desc: "",
      error: false
    };
    //this.weatherCall();
    //Tweather();
  }

celsiusCalc(temp) {
  let c = Math.floor(temp - 273.15);
  return c
}

weatherIcon = {
  Thunderstorm: "wi wi-thunderstorm",
  Drizzle: "wi wi-sleet",
  Rain: "wi wi-storm-showers",
  Snow: "wi wi-snow",
  Atmosphere: "wi wi-fog",
  Clear: "wi wi-day-sunny display-10",
  Clouds: "wi wi-day-fog display-10",
  Sunny: "wi wi-day-sunny display-10"
}

  get_WeatherIcon(icons, id) {
    switch (true) {
      case id >= 200 && id < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case id >= 300 && id <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case id >= 500 && id <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case id >= 600 && id <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case id >= 701 && id <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case id === 800:
        this.setState({ icon: icons.Clear });
        break;
      case id >= 801 && id <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  

weatherCall = async e => {

  e.preventDefault();

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  if (city && country) {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`);

  const response  = await api_call.json();
  console.log(response)

  this.setState({
    city: `${response.name}, ${response.sys.country}`,
    celsius: this.celsiusCalc(response.main.temp),
    max: this.celsiusCalc(response.main.temp_max),
    min: this.celsiusCalc(response.main.temp_min),
    desc: response.weather[0].description,
  })

  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
  //console.log(response.weather[0].id)
} else {
  this.setState({error: true});
}
  };

render() {
  return(
    <div className="App">
    <Form loadweather={this.weatherCall} error={this.state.error}/>
    <Weather 
      city = {this.state.city} 
      country= {this.state.country} 
      celsius= {this.state.celsius}
      max= {this.state.max}
      min= {this.state.min}
      description= {this.state.desc}
      icon = {this.state.icon}
      />
      
  </div>
  
  );
}
}

export default App;
