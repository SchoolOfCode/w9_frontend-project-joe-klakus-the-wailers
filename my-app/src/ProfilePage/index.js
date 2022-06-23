import React from 'react'
import LittleGreenButton from '../App/Components/Button/LittleGreenButtonIndex'
import LittleRedButton from "../App/Components/Button/LittleRedButtonindex" 
import FormInput from '../App/Components/InputTypeText/Input-Index'
import { useState } from 'react'
import { useNavigate } from 'react-router'


const ProfilePage = ({id}) => {

    const [inputValue, setInputValue] = useState([{}])
    const [isDisabled, setIsDisabled] = useState("none")
    const [isDisabledText, setIsDisabledText] = useState("#e0e0e2")

    const navigate = useNavigate();

    function handleChange(event){
      setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value
    });
  
    }

    function toggleDisable(){
      isDisabled === "none" ? setIsDisabled(true) : setIsDisabled("none");
      isDisabledText === "#e0e0e2" ? setIsDisabledText("var(--primary-blue)") : setIsDisabledText("#e0e0e2");
      console.log(isDisabled);
    }
  
    async function submitUser(){
    (async () => {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
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
    
    })();
  }
    return (
        <div>

        <header className='header'>
        
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <p className='profile-icon' onClick={()=>{navigate("/main")}}>{id}</p> 

        {/* {id > 0 ? {id} : "G"} */}
        
        </header> 
        <br></br>

        <div className='login-inputs'> 

           <h1 className="h1-styling">My Profile</h1>
           <div className='profile-page-button-and-icon-spacing'>
           <LittleRedButton handleClick={toggleDisable} className="little-red-button" buttonText={"Edit Profile"}/>
            </div>
           
        
           <p className="create-account-styling" >First Name:</p>
           <FormInput handleChange={handleChange} name="first_name" placeholder='Enter your First Name' default= "Mustafa" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput handleChange={handleChange} name="last_name" placeholder='Enter your Surname' default= "Mohamad" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <p className="create-account-styling">Username:</p>
           <FormInput handleChange={handleChange} name="email" placeholder="Enter your Username" required='required' default ="Mustafa.mohamad239@gmail.com" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <p className="create-account-styling">Change Password:</p>
           <FormInput inputType='password' handleChange={handleChange} name="password" placeholder="Enter a Password" default ="password" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <p className="create-account-styling">Address:</p>
           <FormInput handleChange={handleChange} name="house_number" placeholder="House/Flat Name or Number"  default = "12" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <br></br>
           <FormInput handleChange={handleChange} name="street_address" placeholder="Street Address" default = "New Street" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <br></br>
           <FormInput handleChange={handleChange} name="town" placeholder="Town/City" default = "Birmingham" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <br></br>
           <FormInput handleChange={handleChange} name="region" placeholder="Region" default = "West Midlands" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <br></br>
           <FormInput handleChange={handleChange} name="postcode" placeholder="Postcode" default = "B4 5QE" disabled = {isDisabled} isDisabledText={isDisabledText}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
<<<<<<< HEAD
           <LittleGreenButton handleClick={submitUser} className="little-green-button" buttonText={"Save Changes"}/>
=======
           <LittleGreenButton className="little-green-button" buttonText={"Save Changes"}/>
           <br></br>
           <br></br>
           <br></br>
           <LittleRedButton handleClick={submitUser} className="little-red-button" buttonText={"Log Out"}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
>>>>>>> 93dbe33e2fdcf19f47ca61b759c34142e427da4e


         </div>
        </div>
    )
}

export default ProfilePage