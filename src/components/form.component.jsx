import React from 'react';
import './form.css'

const Form = props =>{
  return(
    <form onSubmit={props.loadweather}>
    <div className = "container">
      <div className="row">
        <div className="col-md-3 offset-md-2">
          <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"></input>
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"></input>
        </div>
        <div className="col-md-3 mt-md-0 text-md-left">
          <button className ="btn btn-info">Get Weather</button>
        </div>
      </div>
    </div>
  </form>
  );
}
export default Form;