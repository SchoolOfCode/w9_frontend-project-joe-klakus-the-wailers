import React from 'react'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import FormInput from '../App/Components/InputTypeText/Input-Index'
import LargeFormInput from '../App/Components/InputTypeText/LargeInput'

const CreateEvent = () => {
    
const submitEvent = async () => {
    (async () => {
    const rawResponse = await fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name_of_event: "Brum JS",
        event_host: 1,
        start_time: "2004-10-19T09:23:54.000Z",
        end_time: "2004-10-19T12:23:54.000Z",
        description: "Meetup for Everyone",
        cost: 0,
        house_number: "custard factory",
        street_address: "birmingham",
        town: "birmingham",
        region: "birmingham",
        postcode: "birmingham",
        lat: 51.5073509,
        long: -0.1277583,
        userAttending: 1
      })
    });
    const content = await rawResponse.json();
  
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
           <h1 className="h1-styling">Create an Event</h1>
           <p className="create-account-styling">Event Name:</p>
           <FormInput name="username-input" placeholder="Event Name Here" />
           <p className="create-account-styling">Host:</p>
           <FormInput name="username-input" placeholder="Individual or Company Name"/>
           
           <p className="create-account-styling">Event Address:</p>
           <FormInput name="username-input" placeholder="Building Name or Number" />
           <br></br>
           <FormInput name="username-input" placeholder="Street Address" />
           <br></br>
           <FormInput name="username-input" placeholder="Town/City"/>
           <br></br>
           <FormInput name="username-input" placeholder="Region" />
           <br></br>
           <FormInput name="username-input" placeholder="Postcode" />

           <p className="create-account-styling">Start Time:</p>
           <FormInput name="username-input" />
           <p className="create-account-styling">End Time:</p>
           <FormInput name="username-input" />

           <br></br>
           <p className="create-account-styling">Event Information:</p>
           <LargeFormInput className="large-text-input" placeholder="Say a little about your Event. Is it just a social? Is it a Study Session? The more the merrier."/>
      


           <p className="create-account-styling">Profile Picture:</p>
           <OrangeButton className="orange-button" buttonText={"Upload from your Device"}/>
           <br></br>
           <GreenButton handleClick={submitEvent} className="green-button" buttonText={"Create Event"}/>

         </div>
        </div>
    )
}

export default CreateEvent

