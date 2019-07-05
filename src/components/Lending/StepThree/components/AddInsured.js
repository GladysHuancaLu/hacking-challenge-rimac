import React from 'react';

const AddInsured = ( {nextStep, updateAddInsured}) => {
  const onSubmit = () => {
    nextStep();
}; 

    return (
        <form className="col-sm-12" onSubmit={onSubmit}>
        <div className="form-group col-sm-3">
            <label htmlFor="name">Nombre:</label><br />
            <input
              className="input-border"
              placeholder="Ingrese nombre"
              name="name"
              onChange = {updateAddInsured}
            /> {/* register an input */}              
        </div>
        <div className="form-group text-center m-5">
          <input className="btn btn-secondary btn-lg" value="COMENZAR" type="submit" />
        </div>
      </form>
    )

};
export default AddInsured;