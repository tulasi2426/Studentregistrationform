import React, { useState } from "react";


function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contactno, setContactno] = useState("");
  const [date, setDate] = useState();
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState(""); 

  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [genderError, setgenderError] = useState("")
  const [contactnoError, setcontactnoError] = useState("")
  const [dateError, setdateError] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [retypeError, setretypeError] = useState("")
  const [emptyError, setemptyError] = useState("")

  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetErrorDefault = () => {
    setnameError("")
    setemailError("")
    setgenderError("")
    setcontactnoError("")
    setdateError("")
    setpasswordError("")
    setretypeError("")
    setemptyError("")

  }

  const handleReset = () => {
    setFname("")
    setEmail("")
    setGender("")
    setContactno("")
    setDate("")
    setPassword("")
    setRetype("")
    resetErrorDefault()

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    resetErrorDefault()

    if (fname === " " || email === "" || gender === "" || contactno === "" || date === "" || password === " " || retype === "") {
      setemptyError("All feild are manditory except last name");
      return false;
    }
    if (!fname.match(/^[A-Za-z0-9- ]+$/)) {
      setnameError("Name is not Alphanumeric")
      return false
    }

    if (!email.includes("@")) {
      setemailError("Email must contain @")
      return false
    }

    if (!gender.match(/Male|Female|Other/i)) {
      setgenderError("Enter correct gender");
      return false
    }

    if (!contactno.match(/^[0-9]+$/)) {
      setcontactnoError("wrong number");
      return false
    }

    if (password.length < 6) {
      setpasswordError("Password must contain atleast 6 letters");
      return false
    }

    if (!retype.match(password)) {
      setretypeError("Password is not same")
      return false
    }

    if (
      !nameError &&
      !dateError &&
      !emailError &&
      !passwordError &&
      !retypeError &&
      !contactnoError
    ) {
      setIsSubmitted(true);
    } else {
      setnameError(nameError);
      setdateError(dateError)
      setemailError(emailError);
      setpasswordError(passwordError);
      setretypeError(retypeError);
      setcontactnoError(contactnoError);
      resetErrorDefault()
    }
  }

  return (
    <div className="App">
      <h1>STUDENT REGISTRATION FORM</h1>
      <div> {isSubmitted ? (
        <div><h1>Hello, you are registered succesfully</h1></div>
      ) : (<form onSubmit={handleSubmit} >
        <label>Name:<input type="text" name="fname" value={fname} onChange={(e) => { setFname(e.target.value) }} /></label><br />
        <span className="form-error">{nameError}</span>

        <label>Email:<input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /></label><br />
        <span className="form-error">{emailError}</span>
        <label>Gender:
          <select name="gender" value={gender} onChange={(e) => { setGender(e.target.value) }}>
            <option value="empty"></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label><br />
        <span className="form-error">{genderError}</span>
        <label>Contact no: <input type="text" name="contact no" value={contactno} onChange={(e) => { setContactno(e.target.value) }} /></label><br />
        <span className="form-error">{contactnoError}</span>
        <label>Date of Birth: <input type="date" name="dateofb" value={date} onChange={(e) => { setDate(e.target.value) }} /></label><br />
        <span className="form-error">{dateError}</span>
        <label>Password: <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /></label><br />
        <span className="form-error">{passwordError}</span>
        <label>Confirm: <input type="password" name="retypepassword" value={retype} onChange={(e) => { setRetype(e.target.value) }} /></label><br />
        <span className="form-error">{retypeError}</span>
        <span className="form-error">{emptyError}</span>
        <div className="form-action">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit" value="Submit">Submit</button>
        </div>
      </form>)}
      </div>
    </div>
  );
}

export default App;
