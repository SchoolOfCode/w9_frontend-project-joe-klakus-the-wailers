import React from 'react'
import NeutralButton from '../Button/NeutralButtonIndex'
import ConstructiveButton from '../Button/ConstructiveButtonIndex'
import FormInput from '../InputTypeText/Input-Index'
import { useState } from 'react';
import {useNavigate} from "react-router"

const CreateUser = () => {
  const [inputValue, setInputValue] = useState([{}])
  const [createUError, setCreateUError] = useState([])
  //navigate function
  const navigate = useNavigate();

  function handleChange(event){
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
  });

  }

  async function submitUser(e){
  (async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      first_name: inputValue.first_name,
      last_name: inputValue.last_name,
      email: inputValue.email,
      password: inputValue.password,
      house_number: inputValue.house_number,
      street_address: inputValue.street_address,
      town: inputValue.town,
      region: inputValue.region,
      postcode: inputValue.postcode})
    });
    const content = await response.json();
    if (content.errors) {
      setCreateUError(content.errors)
    } else if (content.Success === true){navigate("/")}
  })();
}
    return (
        <div>

       <header className='header'>
        <img className='our-logo' src="/mainLogo.png" alt="Bootcamper Social Logo"/>
      </header>  
      <br></br>
      <form className='login-inputs'> 
           <h1 className="h1-styling">Create Account</h1>
           <p className="create-account-styling" >First Name:</p>
           <FormInput handleChange={handleChange} name="first_name" placeholder='Enter your First Name'/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput handleChange={handleChange} name="last_name" placeholder='Enter your Surname'/>
           <p className="create-account-styling">Email Address:</p>
           <FormInput handleChange={handleChange} name="email" required={"required"} placeholder="Enter your Email Address" />
           <p className="create-account-styling">Password:</p>
           <FormInput handleChange={handleChange} name="password" required={"required"} inputType='password' placeholder="Enter a Password" />
           <p className="create-account-styling">Address:</p>
           <FormInput handleChange={handleChange} name="house_number" placeholder="House/Flat Name or Number" />
           <br></br>
           <FormInput handleChange={handleChange} name="street_address" placeholder="Street Address" />
           <br></br>
           <FormInput handleChange={handleChange} name="town" placeholder="Town/City"/>
           <br></br>
           <FormInput handleChange={handleChange} name="region" placeholder="Region" />
           <br></br>
           <FormInput handleChange={handleChange} name="postcode" placeholder="Postcode" />
           <p className="create-account-styling">Profile Picture:</p>
           <NeutralButton className="orange-button" buttonText={"Upload from your Device"}/>
           <br></br>
           {createUError.map((error) => (
            <h1 className='login-error-message'>{error.param + ' ' + error.msg}</h1>
            ))}
           <br></br>
           <ConstructiveButton type={'submit'} handleClick={(e)=>{e.preventDefault(); submitUser()}} className="green-button" buttonText={"Create User"} />
         </form>
        </div>
    )
}

export default CreateUser