import React from 'react';
// import useForm from "react-hook-form";
import AddInsured from './components/AddInsured';

const StepThree = ( { nextStep, add, addChange,registerUserDate, updateAddInsured, insuredGroup, inputValues, registerUser}) => {

    const onSubmit = (data) => {
      inputValues(data)
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
                <h2>Tus asegurados: </h2>
                <p>Presentanos a quien vamos a proteger</p>
                {registerUserDate.insured==="si"
                 ? (<p >{registerUser.name}</p>)
                 : (<br/>)
                }
                {(insuredGroup.length > 0)
                 ? (insuredGroup.map((item) => (<p >{item.nombres}</p>)))
                 : (<p>Sin asegurados terceros</p>)
                }
          <div className="form-group col-sm-3">
            <label htmlFor="add"></label><br />
                <input
                    type ="button"
                    id="add"
                    name="add"
                    value="AÑADIRIR OTRO ASEGURADO MAS"
                    onClick = {addInsured}
            /> {/* register an input */}            
          </div>
            {!add
            ? (
              <div className="form-group text-center m-5">
              <input className="btn btn-secondary btn-lg" value="SIGUIENTE" type="submit" />
            </div>
            )
            :(
              ""
            )
            }
        </form>
        {add && (
            <AddInsured nextStep={nextStep} updateAddInsured={updateAddInsured}/>
             )}
     </div>
   </div>            
    </div>
    )

};
export default StepThree;