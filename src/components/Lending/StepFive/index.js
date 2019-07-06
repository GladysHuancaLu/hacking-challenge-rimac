import React from 'react';
import { Link } from 'react-router-dom';

const StepFive = (registerUser) => {

    return (
        <div className="container-fluid height">
        <div className="row d-flex align-items-stretch height">
          <div className="col-4 base height">
           <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />
          </div>
          <div className="col-8 height">
              <h1>FELICIDADES</h1>
              <p>Tus seres queridos ahora se encuentran protegidos</p>
              <p>Descarga tu poliza que llegara en un maximo de 24 horas al correo {registerUser.email}</p>
              <a href="url">Conoce más sobre tu seguro</a>
              <div>
                <h5>Usa nuestra Rimac App</h5>
                <p>Descarga nuestra app, crea tu cuenta de usuario y cuen ta con todas las coberturas</p>
              </div>
            <button type="button" className="btn-solucion color-red mt-5">
              <Link to="/" className="links">IR AL HOME</Link>
            </button>
         </div>
       </div>            
        </div>
    )

};
export default StepFive;