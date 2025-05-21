import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SigninHeader from "../../components/SigninHeader";
import UserFormInput from "../../components/UserFormInput";
import registerUser, {hasValidationErrors} from "../../utils/registrationValidation";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

let counter = 0;

const Register = () => {
  const [registrationFormData, setRegistrationFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    reenter_password: "",
  });

  const [error, setError] = useState({
    nameError: "",
    mobileError: "",
    emailError: "",
    pwdError: "",
    reEnterPwdError: "",
  });

  /*const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    let updatedEr = registerUser(registrationFormData);
    setError(prevData => ({
      ...prevData,
      ...updatedEr
    }))
  }, [registrationFormData]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (registrationFormData.password === '') {
      setRegistrationFormData(prev => ({
        ...prev,
        reenter_password: '',
      }));
    }
  }, [registrationFormData.password]);
  */

  const handleSubmit = async(e) => {
    e.preventDefault();
    let updatedEr = registerUser(registrationFormData);
    setError(prevData => ({
      ...prevData,
      ...updatedEr
    }))
    if(!hasValidationErrors(updatedEr)){
      await axios.post(BASE_URL+"/user/signup", {
        name: registrationFormData.name,
        mobile: registrationFormData.mobile,
        email: registrationFormData.email,
        password: registrationFormData.password,
      })
    }
  };

  const updateUserRegisterForm = (e) => {
    let propertyName = e.target.id;
    let value = e.target.value;
    let errName = propertyName+Error;
    if (value && error.errName){
      setError(prevData => ({
        ...prevData,
        errName : ""
      }))
    }
    console.log(value);
    
    setRegistrationFormData((prevData) => ({
      ...prevData,
      [propertyName]: value.trim(),
    }));
  };

  return (
    <>
      <SigninHeader />
      <div
        id="userRegistration"
        className="border-gray-300 border-1 mx-auto rounded-md py-3 px-6 w-60 md:w-100 lg:w-1/4"
      >
        <h1 className="text-3xl">Create account</h1>
        <form onSubmit={handleSubmit}>
          <UserFormInput
            labelText="Your name"
            value={registrationFormData.name}
            onChange={updateUserRegisterForm}
            inputId="name"
            inputType="text"
            autoComplete="on"
            placeholder="First and Last name"
          />
          {error.nameError && (
            <div className="formError">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span> {error.nameError}</span>
            </div>
          )}
          <UserFormInput
            labelText="Mobile number"
            value={registrationFormData.mobile}
            onChange={updateUserRegisterForm}
            inputId="mobile"
            inputType="text"
            autoComplete="on"
          />
          {error.mobileError && (
            <div className="formError">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span> {error.mobileError}</span>
            </div>
          )}
          <UserFormInput
            labelText="Email"
            value={registrationFormData.email}
            onChange={updateUserRegisterForm}
            inputId="email"
            inputType="text"
            autoComplete="on"
          />
          {error.emailError && (
            <div className="formError">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span> {error.emailError}</span>
            </div>
          )}
          <UserFormInput
            labelText="Password"
            inputId="password"
            value={registrationFormData.password}
            onChange={updateUserRegisterForm}
            inputType="password"
            autoComplete="off"
            placeholder="At least 6 characters"
          />
          {error.pwdError && (
            <div className="formError">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span> {error.pwdError}</span>
            </div>
          )}
          <UserFormInput
            labelText="Re-enter password"
            value={registrationFormData.reenter_password}
            onChange={updateUserRegisterForm}
            inputId="reenter_password"
            inputType="password"
            autoComplete="off"
          />
          {error.reEnterPwdError && (
            <div className="formError">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span> {error.reEnterPwdError}</span>
            </div>
          )}
          <input
            type="submit"
            value="Continue"
            className="bg-yellow-300 rounded-full w-full mt-3 text-[0.8em] py-1 cursor-pointer"
          />
          <p className="text-[0.7em]/4 py-3">
            By creating an account, you agree to Amazon's Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <div className="w-auto text-center">
            <span className="text-[0.8em]">
              Already have an account?{" "}
              <Link to="/login">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
