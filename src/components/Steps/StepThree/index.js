import React from 'react';
import useForm from "react-hook-form";
import './stepThree.css'; 

const StepThree = ( { nextStep, insuredGroup, updateTarjeta}) => {
  const { register, handleSubmit} = useForm(); // initialise the hook
    const onSubmit = (data) => {
      updateTarjeta(data);
      nextStep();
    }; // callback when validation pass

    return (
     <div className="container-fluid height">
    <div className="row d-flex align-items-stretch height">
      <div className="col-4 base height">
       <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
      </div>
      <div className="col-8 height">
        <h2>Elige el pago ideal</h2>
        <button>Pago mensual {Object.keys(insuredGroup).length*20}</button>
        <button>Pago mensual {Object.keys(insuredGroup).length*200}</button>
       <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
         <p>Ahora ingresa los datos de tu tarjeta</p>
          <div className="form-group col-sm-3">
          <label htmlFor="email"></label><br />
              <input
                className="input-border"
                placeholder="Nombre del titular"
                name="name"
                ref={register}
              /> {/* register an input */}
          <label htmlFor="email"></label><br />
              <input
                className="input-border"
                placeholder="Numero de tarjeta"
                name="number"
                ref={register}
              /> {/* register an input */}
          <label htmlFor="email"></label><br />
              <input
                className="input-border"
                placeholder="Fecha de vencimiento"
                name="vencimiento"
                ref={register}
              /> {/* register an input */}
          <label htmlFor="email"></label><br />
              <input
                className="input-border"
                placeholder="CVV"
                name="cvv"
                ref={register}
              /> {/* register an input */}
          <label htmlFor="email"></label><br />
              <input
                className="input-border"
                placeholder="Correo electronico"
                name="correo"
                ref={register}
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
export default StepThree;