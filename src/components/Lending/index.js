import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';


const Lending = () => {
  const [step, setStep] = useState(1);
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState(false); // boton para mostrar template de agregar nuevo asegurado

  const [insured, setInsured] = useState([]); // aca debe ir el array de objetos de los asegurados


  useEffect(() => {
    console.log(dni);
  }, [dni]);

  useEffect(() => {
    console.log(name);
  }, [name]);


  const nextStep = () => {
    setStep(step + 1);
  };

  const updateInput = (e) => {
    setDni(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const addChange = () => {
    setAdd(true);
  };
  const updateAddInsured = (e) => {
    setInsured([...e.target.value])
  }
  return (
    <Layout>
      {step === 1 && (
      <StepOne nextStep={nextStep} updateInput={updateInput} updateName={updateName}/>
      )}
      {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        updateEmail={updateEmail}
        name={name}
        dni={dni}
      />
      )}
      {step === 3 && (
      <StepThree
        nextStep={nextStep}
        name={name}
        email={email}
        add={add}
        addChange={addChange}
        updateAddInsured={updateAddInsured}
      />
      )}
      {step === 4 && ( 
        <StepFour
          nextStep={nextStep}
        />
      )}
      {step === 5 && (
      <StepFive />
      )}

    </Layout>
  );
};

export default Lending;