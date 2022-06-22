import React from 'react'
import LittleRedButton from '../App/Components/Button/LittleRedButtonIndex.js'
import FormInput from '../App/Components/InputTypeText/Input-Index'

const ProfilePageLocked = () => {
    return (
        <div>

        <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <p className='profile-icon'>JK</p> 
        </header> 
        <br></br>

        <div className='login-inputs'> 

           <h1 className="h1-styling">My Profile</h1>
           <LittleRedButton className="little-red-button" buttonText={"Edit Profile"}/>
           <p className='profile-icon'>JK</p> 

           
        
           <p className="create-account-styling" >First Name:</p>
           <p className="create-account-styling" >Dan</p>.
           <p className="create-account-styling" >Surname:</p>
           <p className="create-account-styling" >Knight</p>
           <p className="create-account-styling">Username:</p>
           <p className="create-account-styling" >Dk@dk.com</p>
           <p className="create-account-styling">Change Password:</p>
           <p className="create-account-styling" >gnru3ig53j89</p>
           <p className="create-account-styling">Address:</p>
           <p className="create-account-styling" >27</p>
           <br></br>
           <p className="create-account-styling" >Code Street</p>
           <br></br>
           <p className="create-account-styling" >Birmingham</p>
           <br></br>
           <p className="create-account-styling" >Midlands</p>
           <br></br>
           <p className="create-account-styling" >B14 5LG</p>


         </div>
        </div>
    )
}

export default ProfilePageLocked