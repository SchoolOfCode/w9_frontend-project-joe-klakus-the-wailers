import React from 'react'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import '../App/App.css'
import { Link } from 'react-router-dom'

const Login = ({onClickLogin}) => {
    return (
        


        <div>
        <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        {/* <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/> */}
        </header>
        <br></br>
           <div className='login-inputs'> 
           <h1 className="h1-styling">Username</h1>
           <FormInput name="username-input" />
           <h1 className="h1-styling">Password</h1>
           <FormInput name="password-input" />
           <br></br>
           <a className='forgotten-password-link' href="url">Forgotten Username or Password?</a>
           <br></br>
           </div>
           <GreenButton handleClick={onClickLogin} className="green-button" buttonText={"Login"}/>
           <br></br>
           <Link to="/newu">
           <OrangeButton className="orange-button" buttonText={"Create User"}/>
           </Link>
           <br></br>
           <p id="guest-login-prompt">Dont want an Account? <br></br>Click Below.</p>
           <GreenButton handleClick={submitForm} className="green-button" buttonText={"Guest Login"}/>


        </div>
    )
}

export default Login