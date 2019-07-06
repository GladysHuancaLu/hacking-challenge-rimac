import React from 'react';
import useForm from "react-hook-form";
import './stepOne.css'; 


const StepOne = ({ nextStep, inputValues}) => {
  const { register, handleSubmit} = useForm(); // initialise the hook

  const onSubmit = (data) => {
    inputValues(data)
    nextStep();
  }; 

  return (
    <div className="row d-flex align-items-stretch height">
      <div className="col-6 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-6 height">
       <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
         <h2>Protégelos ahora</h2>
         <p>Ingresa los datos del titular</p>
          <div className="form-group col-sm-3">
          <label htmlFor="dni">DNI:</label><br />
              <input
                className="input-border"
                placeholder="dni"
                name="dni"
                ref={register}
              /> 
              <label htmlFor="name">Nombre:</label><br />
              <input
                className="input-border"
                placeholder="Ingrese nmbre"
                name="name"
                ref={register}
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
