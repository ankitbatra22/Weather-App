import React from 'react';
import { createPortal } from 'react-dom';

function Weather(props) {
  return (
      <div className="container text-light text-center mx-auto p-3 mt-2"> 
        <div className="cards pt-4">
          <h2 className="text-light text-center">{props.city}</h2>
          <h1 className="py-4 text-center text-light pt-3">
            <i className={`wi ${props.icon} display-1`}></i>
          </h1>
          {props.celsius ? (<h1 className= "py-2 text-center text-light"> {props.celsius}&deg;</h1>): null}

          {showMinMax(props.min, props.max)}
          <h2 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h2>
        </div>
      </div>
  );
};

export default Weather;

function showMinMax(min, max) {
  if (min && max){
  return (
    <h3>
      <span className="px-4">Low: {min}&deg;</span>
      <span className="px-4">High: {max}&deg;</span> 
    </h3>
  );
}
}
