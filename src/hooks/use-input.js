import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type == "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type == "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type == "RESET") {
    return initialInputState;
  }
  return initialInputState;
};
const useInput = (validityFunction) => {
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);
  const valueIsValid = validityFunction(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: "BLUR",
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return {
    enteredValue: state.value,
    isValid: valueIsValid,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  };
};
export default useInput;
