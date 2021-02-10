import React from 'react';
import './form.css'

const Form = props =>{
  return(
    <form onSubmit={props.loadweather}>
    <h1 className="text-center pb-5 text-light"> Ankit's Weather App </h1>
    <div className = "container">
      <div>{props.error ? error(): null}</div>
      <div className="row">
        <div className="col-md-3 offset-md-2">
          <input 
            type="text" 
            className="form-control" 
            name="city" 
            autoComplete="off" 
            placeholder="City"></input>
        </div>
        <div className="col-md-3">
          <input 
            type="text" 
            className="form-control" 
            name="country" 
            autoComplete="off"  
            placeholder="Country"></input>
        </div>
        <div className="col-md-3 mt-md-0 text-md-left">
          <button className ="btn btn-warning">Get Weather</button>
        </div>
      </div>
    </div>
  </form>
  );
}


function error() {
  return(
    <div className = "alert alert-danger mx-5" role = "alert">
      Please Enter the City and Country
    </div>
  )
}
export default Form;