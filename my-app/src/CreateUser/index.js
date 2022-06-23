import React from 'react'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import { useState } from 'react';

const CreateUser = () => {

  const [inputValue, setInputValue] = useState([{}])

  function handleChange(event){
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
  });

  }

  async function submitUser(){ 
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
  
    console.log(content);
  })();
}
    return (
        <div>

       <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        {/* <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/> */}
      </header>  
      <br></br>
      <div className='login-inputs'> 

           <h1 className="h1-styling">Create Account</h1>
           <p className="create-account-styling" >First Name:</p>
           <FormInput handleChange={handleChange} name="first_name" placeholder='Enter your First Name'/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput handleChange={handleChange} name="last_name" placeholder='Enter your Surname'/>
           <p className="create-account-styling">Email Address:</p>
           <FormInput handleChange={handleChange} name="email" placeholder="Enter your Email Address" />
           <p className="create-account-styling">Password:</p>
           <FormInput handleChange={handleChange} name="password" placeholder="Enter a Password" />
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
           <OrangeButton className="orange-button" buttonText={"Upload from your Device"}/>
           <br></br>
           <GreenButton handleClick={submitUser} className="green-button" buttonText={"Create User"} />

         </div>
        </div>
    )
}

export default CreateUser