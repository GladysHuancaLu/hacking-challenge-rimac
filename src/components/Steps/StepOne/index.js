import React from 'react';
import useForm from "react-hook-form";
import './stepOne.css'; 

const StepOne = ( { nextStep, updateRegister, registerUser}) => {
  const { register, handleSubmit} = useForm(); // initialise the hook
    const onSubmit = (data) => {
      updateRegister(data)
      nextStep();
    }; // callback when validation pass

    return (
     <div className="container-fluid height">
    <div className="row d-flex align-items-stretch height">
      <div className="col-4 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-8 height">
        <h2>Hola {registerUser.name},</h2>
        <h2>cuéntanos sobre ti</h2>
        <p>Podrás protegerlos por solo S/. 20 al mes por asegurado</p>
       <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <p>DNI : {registerUser.dni}</p>
            <label htmlFor="email">EMAIL:</label><br />
              <input
                className="input-border"
                placeholder="email"
                name="email"
                ref={register}
              /> {/* register an input */} 
              <h5>¿Este seguro espara ti?</h5>
              <input
                 type="radio"
                 name="insured"
                 ref={register}
                 value="no"
              /> {/* register an input */}
              <label htmlFor="email">No:</label><br />
              <input
                type="radio"
                name="insured"
                ref={register}
                value="si"
              /> {/* register an input */} 
              <label htmlFor="insured">Sí:</label><br />            
          </div>
          <div className="form-group text-center m-5">
            <input className="btn btn-secondary btn-lg" value="SIGUIENTE" type="submit" />
          </div>
        </form>
     </div>
   </div>            
    </div>
    )

};
export default StepOne;