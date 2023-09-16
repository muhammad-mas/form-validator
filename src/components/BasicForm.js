import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    hasError: firstNameInValid,
    isValid: isFirstNameValid,
    inputBlurHandler: firstNameBlur,
    inputChangeHandler: firstNameChange,
    reset: firstNameReset,
  } = useInput((value) => value.trim() != "");

  const {
    enteredValue: lastName,
    isValid: islastNameValid,
    hasError: lastNameInValid,
    inputBlurHandler: lastNameBlur,
    inputChangeHandler: lastNameChange,
    reset: lastNameReset,
  } = useInput((value) => value.trim() != "");
  const {
    enteredValue: email,
    isValid: isEmailValid,
    hasError: emailInValid,
    inputBlurHandler: emailBlur,
    inputChangeHandler: emailChange,
    reset: emailReset,
  } = useInput((value) => value.trim() != "" && value.includes("@"));
  let isFormValid = false;
  if (isFirstNameValid && islastNameValid && isEmailValid) {
    isFormValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log(email, lastName, firstName);
    } else {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control  ${firstNameInValid ? "invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChange}
            onBlur={firstNameBlur}
          />

          {firstNameInValid && <p className="error-text">First Name Invalid</p>}
        </div>
        <div className={`form-control  ${lastNameInValid ? "invalid" : ""}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChange}
            onBlur={lastNameBlur}
          />
          {lastNameInValid && <p className="error-text">Last Name Invalid</p>}
        </div>
      </div>
      <div className={`form-control  ${emailInValid ? "invalid" : ""}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
        />{" "}
        {emailInValid && <p className="error-text">Email Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
