import React from 'react';
import { createPortal } from 'react-dom';

function Weather() {
  return (
   // <div className="background">
      <div className="container"> 
        <div className="card">
          <h1>Weather App Inital</h1>
          <h5 className="py-4">
            <i className="wi wi-day-sunny display-10" ></i>
          </h5>
          <h1 className="py-2">25&deg;</h1>
        </div>
      </div>
    //</div>
  );
};



export default Weather;

