import React from 'react';
import useForm from "react-hook-form";

const AddInsured = ( { updateAddInsured}) => {
  const { register, handleSubmit} = useForm(); // initialise the hook
  const onSubmit = (data) => {
    updateAddInsured(data);
    // nextStep();
}; 

    return (
        <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group col-sm-3">
            <label htmlFor="dni"></label><br />
            <input
              className="input-border"
              placeholder="DNI"
              name="dni"
              ref={register}
            /> {/* register an input */}
            <label htmlFor="nombres"></label><br />
            <input
              className="input-border"
              placeholder="Nombres"
              name="nombres"
              ref={register}
            /> {/* register an input */}
            <label htmlFor="apellido-paterno"></label><br />
            <input
              className="input-border"
              placeholder="Apellido Paterno"
              name="apellido-paterno"
              ref={register}
            /> {/* register an input */}
            <label htmlFor="apellido-materno"></label><br />
            <input
              className="input-border"
              placeholder="Apellido Materno"
              name="apellido-materno"
              ref={register}
            /> {/* register an input */}
            <label htmlFor="fecha-nacimiento"></label><br />
            <input
              className="input-border"
              placeholder="Fecha de Nacimiento"
              name="fecha-nacimiento"
              ref={register}
            /> {/* register an input */}
            <div>
              <p>Genero:</p>
              <input
                 type="radio"
                 name="genero"
                 ref={register}
                 value="masculino"
              /> {/* register an input */}
              <label htmlFor="genero">Masculino</label><br />
                <input
                type="radio"
                name="genero"
                ref={register}
                value="femenino"
              /> {/* register an input */}
              <label htmlFor="genero">Femenino</label><br />
            </div>              
        </div>
        <div className="form-group text-center m-5">
          <input className="btn btn-secondary btn-lg" value="AÑADIR" type="submit" />
        </div>
      </form>
    )

};
export default AddInsured;