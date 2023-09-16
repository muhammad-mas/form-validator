import { useState } from "react";

const useInput = (validityFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validityFunction(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  };
};
export default useInput;
