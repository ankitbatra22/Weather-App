import React from 'react';
import { createPortal } from 'react-dom';

function Weather(props) {
  return (
   // <div className="background">
      <div className="container"> 
        <div className="cards pt-4">
          <h1>Ankit's Weather App</h1>
          
          <h2>{props.city}, {props.country}</h2>
          <h5 className="py-4">
            <i className={props.icon}></i>
          </h5>
          <h1 className="py-2">{props.celsius}&deg;</h1>
          {showMinMax(props.min, props.max)}
          <h2>{props.description}</h2>
        </div>
      </div>
    //</div>
  );
};



export default Weather;

function showMinMax(min, max) {
  return (
    <h3>
    <span className="px-4">{min}&deg;</span>
    <span className="px-4">{max}&deg;</span> 
    </h3>
  )
}
