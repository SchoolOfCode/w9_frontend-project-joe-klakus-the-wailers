import React from 'react'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import '../App/App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { jwtDecode } from "../App/jwt-decode.js";
import {useNavigate} from "react-router"

const Login = () => {
    const [inputValue, setInputValue] = useState([{}])
    const [loginError, setLoginError] = useState()
    const navigate = useNavigate();

    function handleChange(event){
      setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value
    }); 
    }
  
    async function submitUser(e){
      e.preventDefault()
      console.log("refresh prevented"); 
    (async () => {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: "include",
        cache: "no-cache",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: inputValue.username,
        password: inputValue.password,})
      });
     
      const data = await response.json();
      if (data.error) {
        setLoginError(data.error)
        console.log(data.error)
        return;
      }
      else if (data.accessToken) {
      let accessToken = data.accessToken;
      const jwtDecoded = jwtDecode(accessToken);
      console.log(data.accessToken)
      window.location.reload(false)
      }
    })();

  }
    return (
        
        <div>
        <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        {/* <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/> */}
        </header>
        <br></br>
           {/* <div className='login-inputs'>  */}
           <form>
           <h1 className="h1-styling">Email Address:</h1>
           <FormInput required={"required"} handleChange={handleChange} name="username" />
           <h1 className="h1-styling">Password:</h1>
           <FormInput inputType='password' required={"required"} handleChange={handleChange} name="password"/>
           <h1 className='login-error-message'>{loginError}</h1>
           <br></br>
           <a className='forgotten-password-link' href="url">Forgotten Username or Password?</a>
           <br></br>
           <br></br>
           <br></br>
           {/* </div> */}
           <GreenButton handleClick={submitUser} className="green-button" buttonText={"Login"}/>
           <br></br>
           <br></br>
           <Link to="/newu">
           <OrangeButton className="orange-button" buttonText={"Create Account"}/>
           </Link>
           <br></br>
           <p id="guest-login-prompt">Dont want an Account? <br></br>Click Below.</p>
           <GreenButton type={'submit'} handleClick={()=>{navigate("/main")}} className="green-button" buttonText={"Guest Login"}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           </form>
        </div>
    )
}

export default Login