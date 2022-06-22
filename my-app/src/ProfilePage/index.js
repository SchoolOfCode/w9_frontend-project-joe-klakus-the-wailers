import React from 'react'
import LittleRedButton from '../App/Components/Button/LittleRedButtonindex'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import { useState } from 'react'

const ProfilePage = () => {

    const [inputValue, setInputValue] = useState([{}])

    function handleChange(event){
      setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value
    });
      console.log(inputValue)
  
    }
  
    async function submitUser(){
      // console.log("This works")
      
    
    (async () => {
      const response = await fetch('http://localhost:5000/users/2', {
        method: 'PATCH',
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
        <p className='profile-icon'>JK</p> 
        </header> 
        <br></br>

        <div className='login-inputs'> 

           <h1 className="h1-styling">My Profile</h1>
           <LittleRedButton handleClick={submitUser} className="little-red-button" buttonText={"Edit Profile"}/>
           <p className='profile-icon'>JK</p> 

           
        
           <p className="create-account-styling" >First Name:</p>
           <FormInput handleChange={handleChange} name="first_name" placeholder='Enter your First Name' disabled={true}/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput handleChange={handleChange} name="last_name" placeholder='Enter your Surname'/>
           <p className="create-account-styling">Username:</p>
           <FormInput handleChange={handleChange} name="email" placeholder="Enter your Username" />
           <p className="create-account-styling">Change Password:</p>
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


         </div>
        </div>
    )
}

export default ProfilePage