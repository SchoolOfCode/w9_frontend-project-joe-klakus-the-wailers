import React from 'react'
import LittleGreenButton from '../App/Components/Button/LittleGreenButtonIndex'
import FormInput from '../App/Components/InputTypeText/Input-Index'

const ProfilePage = () => {
    return (
        <div>

        <header className='header'>
        
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <p className='profile-icon'>JK</p> 
        
        </header> 
        <br></br>

        <div className='login-inputs'> 

           <h1 className="h1-styling">My Profile</h1>
           <div className='profile-page-button-and-icon-spacing'>
           <LittleGreenButton className="little-green-button" buttonText={"Save Changes"}/>
           <p className='profile-icon'>JK</p> 
            </div>
           
        
           <p className="create-account-styling" >First Name:</p>
           <FormInput name="username-input" placeholder='Enter your First Name' disabled={true}/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput name="username-input" placeholder='Enter your Surname'/>
           <p className="create-account-styling">Username:</p>
           <FormInput name="username-input" placeholder="Enter your Username" />
           <p className="create-account-styling">Change Password:</p>
           <FormInput name="username-input" placeholder="Enter a Password" />
           <p className="create-account-styling">Address:</p>
           <FormInput name="username-input" placeholder="House/Flat Name or Number" />
           <br></br>
           <FormInput name="username-input" placeholder="Street Address" />
           <br></br>
           <FormInput name="username-input" placeholder="Town/City"/>
           <br></br>
           <FormInput name="username-input" placeholder="Region" />
           <br></br>
           <FormInput name="username-input" placeholder="Postcode" />


         </div>
        </div>
    )
}

export default ProfilePage