import React from 'react';
import AddInsured from './components/AddInsured';

const StepThree = ( { nextStep, name, add, addChange}) => {

    const onSubmit = () => {
        nextStep();
    }; // callback when validation pass
    const addInsured = () => {
        addChange();
    }

    return (
     <div className="container-fluid height">
    <div className="row d-flex align-items-stretch height">
      <div className="col-4 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-8 height">
       <form className="col-sm-12" onSubmit={onSubmit}>
           <p>TUS ASEGURADOS: </p>
           <p>{name}</p>
          <div className="form-group col-sm-3">
            <label htmlFor="add">AÑADIRIR OTRO ASEGURADO MAS</label><br />
                <input
                    type ="button"
                    id="add"
                    name="add"
                    onClick = {addInsured}
            /> {/* register an input */}            
          </div>
          {add && (
            <AddInsured nextStep={nextStep}/>
             )}
          <div className="form-group text-center m-5">
            <input className="btn btn-secondary btn-lg" value="SIGUIENTE" type="submit" />
          </div>
        </form>
     </div>
   </div>            
    </div>
    )

};
export default StepThree;