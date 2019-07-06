import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';


const Lending = () => {
  const [step, setStep] = useState(1);
  const [registerUser, setRegisterUser] = useState({});
  const [registerUserDate, setRegisterUserDate] = useState({});
  const [add, setAdd] = useState(false); // boton para mostrar template de agregar nuevo asegurado
  const [tarjeta, setTarjeta] = useState({});
  const [insuredGroup, setInsuredGroup] = useState([]); // aca debe ir el array de objetos de los asegurados


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
    <Layout>
      {step === 1 && (
      <StepOne
      nextStep={nextStep} 
      inputValues={inputValues}
      />
      )}
      {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        updateRegister={updateRegister}
        registerUser={registerUser}
      />
      )}
      {step === 3 && (
      <StepThree
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
      {step === 4 && ( 
        <StepFour
          nextStep={nextStep}
          insuredGroup={insuredGroup}
          updateTarjeta={updateTarjeta}
          tarjeta={tarjeta}
          // updateTarjeta={updateTarjeta}
        />
      )}
      {step === 5 && (
      <StepFive 
      registerUser={registerUser}
      />
      )}

    </Layout>
  );
};

export default Lending;