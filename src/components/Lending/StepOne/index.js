import React from 'react';
import './stepOne.css'; 


const StepOne = ({ nextStep, updateInput, updateName}) => {
  const onSubmit = () => {
    nextStep();
  }; 

  return (
    <div className="row d-flex align-items-stretch height">
      <div className="col-6 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-6 height">
       <form className="col-sm-12" onSubmit={onSubmit}>
          <div className="form-group col-sm-3">
          <label htmlFor="dni">DNI:</label><br />
              <input
                className="input-border"
                placeholder="dni"
                name="dni"
                onChange = {updateInput}
              /> 
              <label htmlFor="name">Nombre:</label><br />
              <input
                className="input-border"
                placeholder="Ingrese nmbre"
                name="name"
                onChange = {updateName}
              />              
          </div>
          <div className="form-group text-center m-5">
            <input className="btn btn-secondary btn-lg" value="COMENZAR" type="submit" />
          </div>
        </form>
     </div>
   </div>
  );
};

export default StepOne;
