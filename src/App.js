import React, { useState } from 'react';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [resultmessage, setResultMessage] = useState("");

  const validateInputs = () => {
    // Check if inputs are empty
    if (firstNumber === "") {
      setErrorMessage('Error: firstNumber Cant be empty');
      return false;
    }
    else if(secondNumber ===""){
      setErrorMessage('Error: secondNumber Cant be empty');
      return false;
    }

    // Check if inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setErrorMessage('Inputs must be numbers');
      return false;
    }

    // Inputs are valid
    setErrorMessage("");
    return true;
  };


  const handleAddition = () => {
    if (!validateInputs()) return;

    setResult(Number(firstNumber) + Number(secondNumber));
    setResultMessage("Result : ");
    setSuccess("Success : Your result is shown above!");
    
  };

  const handleSubtraction = () => {
    if (!validateInputs()) return;

    setResult(Number(firstNumber) - Number(secondNumber));
    setResultMessage("Result : ");
    setSuccess("Success : Your result is shown above!");
  };

  const handleMultiplication = () => {
    if (!validateInputs()) return;

    setResult(Number(firstNumber) * Number(secondNumber));
    setResultMessage("Result : ");
    setSuccess("Success : Your result is shown above!");
  };

  const handleDivision = () => {
    if (!validateInputs()) return;

    // Check if second number is 0
    if (secondNumber === 0) {
      setErrorMessage('Cannot divide by 0');
      setSuccess("Success : Your result is shown above!");
      return;
    }

    setResultMessage("Result : ");
    setResult(Number(firstNumber) / Number(secondNumber));
  };
  

  return (
    <div className="calculator">
        <h1>React Calculator</h1>

      <input
        type="text"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <br />

      <input
        type="text"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <br />

      <div className='button'>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
        <br />

      </div> 
      
         <div>
         {(
         <h3>
         {resultmessage}
         {result}
       </h3>

        )}
          <p style={{ color: "green" }}>{success}</p>
        </div>
        { <div className="error-message">{errorMessage}</div>}
       
    </div>
  );
}

export default Calculator;
