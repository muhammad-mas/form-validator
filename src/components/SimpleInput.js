import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const nameInputRef = useRef("");

  const enteredNameIsValid = enteredName.trim() != "";
  const enteredEmailIsValid =
    enteredEmail.trim() != "" && enteredEmail.trim().includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailInValid = enteredEmailTouched && !enteredEmailIsValid;
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() != "") {
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    }
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // if (event.target.value.trim() != ""  ) {
    // }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
    // nameInputRef.current.value=''; not an ideal way to manipulate the dom directly
    // console.log(nameInputRef.current.value);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !enteredEmailInValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
      </div>
      {enteredEmailInValid && (
        <p className="error-text">
          Email must not be empty and must include @.
        </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}> Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
