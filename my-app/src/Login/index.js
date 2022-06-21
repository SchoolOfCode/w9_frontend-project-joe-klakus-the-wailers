import React from 'react'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import Button from '../App/Components/Button/ButtonIndex'

const Login = () => {
    return (
       
        <div>
        
        <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/>
        </header>
        
            
           <h1 className="h1-styling">Username</h1>
           <FormInput name="username-input" />
           <h1 className="h1-styling">Password</h1>
           <FormInput name="password-input" />
           <br></br>
           <a className='forgotten-password-link' href="url">Forgotten Username or Password?</a>
           <br></br>
           <Button className="green-button" buttonText={"Login"}/>
           <br></br>
           <Button className="orange-button" buttonText={"Create User"}/>
           <br></br>
           <p>Dont want an Account? <br></br>Click Below.</p>
           <Button className="green-button" buttonText={"Guest Login"}/>


        </div>
    )
}

export default Login