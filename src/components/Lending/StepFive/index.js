import React from 'react';

const StepFive = ( { nextStep}) => {

    const onSubmit = () => {
        nextStep();
    }; 

    return (
        <form className="d-flex flex-column" onSubmit={onSubmit}>
            <p>paso 5</p>
          <input type="submit" className="col-5 btn color-black bckg-yellow" value="BIENVENIDO" />

        </form>
    )

};
export default StepFive;