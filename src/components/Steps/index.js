import React, { useState, useEffect } from 'react';
import axios from "axios";
// import Layout from '../Layout';
import Register from './Register';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';


const Steps = () => {
  const [step, setStep] = useState(0);
  const [registerUser, setRegisterUser] = useState({});
  const [registerUserDate, setRegisterUserDate] = useState({});
  const [add, setAdd] = useState(false); // boton para mostrar template de agregar nuevo asegurado
  const [tarjeta, setTarjeta] = useState({});
  const [insuredGroup, setInsuredGroup] = useState([]); // aca debe ir el array de objetos de los asegurados
  useEffect(() => {
    axios({
      url: "https://freestyle.getsandbox.com/dummy/obtenerdatospersona",
      method: "POST",
      mode: 'cors',
      header: {},
      body: {},
  })
  .then(resp => console.log(resp.data))  
  .catch(err => console.log(err))
  }, []);
  useEffect(() => {
    console.log(registerUser);
  }, [registerUser]);
  useEffect(() => {
    console.log(registerUserDate);
  }, [registerUserDate]);

  useEffect(() => {
    console.log(insuredGroup);
  }, [insuredGroup]);

  useEffect(() => {
    console.log(tarjeta);
  }, [tarjeta]);


  const nextStep = () => {
    setStep(step + 1);
  };
  const addChange = () => {
    setAdd(true);
  };
  const updateAddInsured = (values) => {
    setAdd(false);
    setInsuredGroup([...insuredGroup, values]);
  }
  const inputValues = (values) => {
    setRegisterUser(values)

  }
  const updateRegister = (values) => {
    setRegisterUserDate(values);
  }
  const updateTarjeta = (values) => {
    setTarjeta(values);
  }

  
  return (
    <div>
      {step === 0 && (
      <Register
      nextStep={nextStep} 
      inputValues={inputValues}
      />
      )}
      {step === 1 && (
      <StepOne
        nextStep={nextStep}
        updateRegister={updateRegister}
        registerUser={registerUser}
      />
      )}
      {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        add={add}
        addChange={addChange}
        updateAddInsured={updateAddInsured}
        insuredGroup={insuredGroup}
        registerUser={registerUser}
        inputValues={inputValues}
        registerUserDate={registerUserDate}

      />
      )}
      {step === 3 && ( 
        <StepThree
          nextStep={nextStep}
          insuredGroup={insuredGroup}
          updateTarjeta={updateTarjeta}
          tarjeta={tarjeta}
        />
      )}
      {step === 4 && (
      <StepFour
      registerUser={registerUser}
      />
      )}

    </div>
  );
};

export default Steps;