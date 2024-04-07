import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Pages-css/Login.css";
import { CONSTANTS } from "../constans";
import Modal from "../components/Modal/Modal";

const Login = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [isValidPassword, setisValidPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function emailHandleChange(event) {
    const inputValue = event.target.value;
    setEmailInput(inputValue);
    if (inputValue === "Shoogi") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }

  function passwordHandleChange(event) {
    const inputValue = event.target.value;
    setPasswordInput(inputValue);
    if (inputValue === "Elieltheking") {
      setisValidPassword(true);
    } else {
      setisValidPassword(false);
    }
  }

  function successLogin() {
    if (isValidEmail && isValidPassword) {
      navigate(CONSTANTS.ROUTE_HOME);
    } else {
      console.log("wrong");
      setShowModal(true);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      successLogin();
    }
  }

  return (
    <div className="login-body">
      {!isValidEmail && !isValidPassword && <Modal showModal={showModal} />}
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Email" onChange={emailHandleChange} onKeyDown={handleKeyDown} />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input type="password" className="login__input" placeholder="Password" onChange={passwordHandleChange} onKeyDown={handleKeyDown} />
              </div>
              <button className="button login__submit" onClick={successLogin}>
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in to Shoogi's website</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
