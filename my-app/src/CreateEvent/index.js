import React from 'react'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import FormInput from '../App/Components/InputTypeText/Input-Index'

const CreateEvent = () => {
    return (
        <div>
            
            <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/>
      </header> 

      <br></br>

      <div className='login-inputs'> 

           <h1 className="h1-styling">Create an Event</h1>

           <p className="create-account-styling">Event Name:</p>
           <FormInput name="username-input" />
           <p className="create-account-styling">Host:</p>
           <FormInput name="username-input" />
           
           <p className="create-account-styling">Event Address:</p>
           <FormInput name="username-input" placeholder="Test"/>
           <br></br>
           <FormInput name="username-input" />
           <br></br>
           <FormInput name="username-input" />
           <br></br>
           <FormInput name="username-input" />

           <p className="create-account-styling">Start Time:</p>
           <FormInput name="username-input" />
           <p className="create-account-styling">End Time:</p>
           <FormInput name="username-input" />

           <br></br>
           <p className="create-account-styling">Event Information:</p>
           <FormInput name="username-input" />
      


           <p className="create-account-styling">Profile Picture:</p>
           <OrangeButton className="orange-button" buttonText={"Upload from your Device"}/>
           <br></br>
           <GreenButton className="green-button" buttonText={"Create User"}/>

         </div>
        </div>
    )
}

export default CreateEvent

