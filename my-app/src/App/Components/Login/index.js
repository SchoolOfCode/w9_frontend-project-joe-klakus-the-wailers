import React from "react";
import FormInput from "../InputTypeText/Input-Index";
import GreenButton from "../Button/GreenButtonIndex";
import OrangeButton from "../Button/OrangeButtonIndex";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "../../jwt-decode.js";
import { useNavigate } from "react-router";

const Login = () => {
  const [inputValue, setInputValue] = useState([{}]);
  const [loginError, setLoginError] = useState();
  const navigate = useNavigate();

  //Event listener for the input field
  function handleChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  //Sends a POST request to log in
  async function submitUser(e) {
    (async () => {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputValue.username,
          password: inputValue.password,
        }),
      });

      const data = await response.json();
      //Returns an error if the email or password are incorrect
      if (data.error) {
        setLoginError(data.error);
        return;
      } else {
        window.location.reload(false);
      }
        //Stores the access token and decrypts it (in case of additional functionality)
        //if (data.accessToken) {
          //   let accessToken = data.accessToken;
          //   const jwtDecoded = jwtDecode(accessToken);
         
    })();
  }
  return (
    <div>
      <header className="header">
        <img
          className="our-logo"
          src="https://i.ibb.co/SJKYb1L/logov1-copy.png"
          alt="Bootcamper Social Logo"
        />
        </header>
      <br></br>
      <form>
        <h1 className="h1-styling">Email Address:</h1>
        <FormInput
          required={"required"}
          handleChange={handleChange}
          name="username"
        />
        <h1 className="h1-styling">Password:</h1>
        <FormInput
          inputType="password"
          required={"required"}
          handleChange={handleChange}
          name="password"
        />
        <h1 className="login-error-message">{loginError}</h1>
        <br></br>
        {/* Currently not functioning TODO*/}
        <a className="forgotten-password-link" href="url">
          Forgotten Username or Password?
        </a>
        <br></br>
        <br></br>
        <br></br>
        <GreenButton
          handleClick={(e) => {
            e.preventDefault();
            submitUser();
          }}
          className="green-button"
          buttonText={"Login"}
        />
        <br></br>
        <br></br>
        <Link to="/newUserPage">
          <OrangeButton
            className="orange-button"
            buttonText={"Create Account"}
          />
        </Link>
        <br></br>
        <p id="guest-login-prompt">
          Dont want an Account? <br></br>Click Below.
        </p>
        <GreenButton
          type={"submit"}
          handleClick={() => {
            navigate("/mainPage");
          }}
          className="green-button"
          buttonText={"Guest Login"}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default Login;
