import React, {Component, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather.component'
import 'weather-icons/css/weather-icons.css'

const key = 'b2788703be160b952a9a79994fb6485b'

function Tweather() {
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b2788703be160b952a9a79994fb6485b')
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, []);
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super();
    this.state = {};
    //this.getWeather();
    Tweather();
  }

getWeather = async() => {
  const api_call = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+key);
  const response  = await api_call.json();
  console.log(response)
}

render() {
  return(
    <div className="App">
    <Weather/>
  </div>
  
  );
}

}
*/

function App() {
  return (
    <Tweather/>
  );
  }

export default App;


