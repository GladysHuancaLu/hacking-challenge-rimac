import React from 'react';
import './stepFour.css'; 

const StepFour = ( { nextStep, name, updateEmail}) => {

    const onSubmit = () => {
     nextStep();
    }; // callback when validation pass

    return (
     <div className="container-fluid height">
    <div className="row d-flex align-items-stretch height">
      <div className="col-4 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-8 height">
       <form className="col-sm-12" onSubmit={onSubmit}>
           <p>Hola {name}</p>
          <div className="form-group col-sm-3">
          <label htmlFor="email">EMAIL:</label><br />
              <input
                className="input-border"
                placeholder="email"
                name="email"
                onChange = {updateEmail}
              /> {/* register an input */}              
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
export default StepFour;