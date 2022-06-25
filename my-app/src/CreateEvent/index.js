import React from "react";
import GreenButton from "../App/Components/Button/GreenButtonIndex";
import OrangeButton from "../App/Components/Button/OrangeButtonIndex";
import FormInput from "../App/Components/InputTypeText/Input-Index";
import LargeFormInput from "../App/Components/InputTypeText/LargeInput";
import { useState } from "react";
import Map from "../App/Components/map/map.js";
import { useNavigate } from "react-router";

const CreateEvent = (props) => {
  const [inputValue, setInputValue] = useState([{}]);
  const [latLong, setlatLong] = useState('')
  const [PostEventError, setPostEventError] = useState('')

  const navigate = useNavigate();

  function handleChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  const submitEvent = async (e) => {
    e.preventDefault()

    (async () => {
      const rawResponse = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name_of_event: inputValue.name_of_event, /// Some values are hardcoded need to fix later
          event_host: props.id,
          start_time: inputValue.start_time,
          end_time:  inputValue.end_time,
          description: inputValue.description,
          cost: inputValue.cost,
          house_number: inputValue.house_number,
          street_address: inputValue.street_address,
          town: inputValue.town,
          region: inputValue.region,
          postcode: inputValue.postcode, 
          lat: (latLong.lat) ? latLong.lat : 52.479780,
          long: (latLong.lng) ? latLong.lng : -1.897950,
          userAttending: 1,
        }),
      });
      const content = await rawResponse.json();
      
      if (content.error) {
        setPostEventError(content.error)}
      else if (content.Success === true) {
        setPostEventError('Event was created')}
        navigate("/");
    })();
  };
  return (
    <div>
      <header className="header">
        <img
          className="our-logo"
          src="https://i.ibb.co/SJKYb1L/logov1-copy.png"
          alt="Bootcamper Social Logo"
        />
        <p className="profile-icon" onClick={()=>{navigate("/main")}}>{props.id}</p>
      </header>

      <br></br>

      <form className="login-inputs">
        <h1 className="h1-styling">Create an Event</h1>
        <p className="create-account-styling">Event Name:</p>
        <FormInput
          handleChange={handleChange}
          name="name_of_event"
          placeholder="Event Name Here"
          required={"required"}

        />
         <p className="create-account-styling">Host:</p>
         <FormInput
          handleChange={handleChange}
          name="event_host"
          placeholder="Individual or Company Name"
        />  

        <p className="create-account-styling">
          Use the map to pin the Location of your event:
        </p>
        <br></br>
        <br></br>
        <div id="map">
          <Map setlatLong={setlatLong}/>
        </div>
        <br></br>
        <br></br>

        <p className="create-account-styling">Event Address:</p>
        <FormInput
          handleChange={handleChange}
          name="house_number"
          placeholder="Building Name or Number"
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="street_address"
          placeholder="Street Address"
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="town"
          placeholder="Town/City"
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="region"
          placeholder="Region"
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="postcode"
          placeholder="Postcode"
        />

        <p className="create-account-styling">Start Time:</p>
        

      <input className="date-time-select" type="datetime-local" id="meeting-time"
       name="start_time" onChange={handleChange}
       min="2022-01-01T00:00" max="2100-01-01T00:00"/>
        <p className="create-account-styling">End Time:</p>
        <input className="date-time-select" type="datetime-local" id="meeting-time"
       name="end_time" onChange={handleChange}
       min="2022-01-01T00:00" max="2100-01-01T00:00"/>

        <br></br>
        <p className="create-account-styling">Event Information:</p>
        <LargeFormInput
          handleChange={handleChange}
          name="description"
          className="large-text-input"
          placeholder="Say a little about your Event. Is it just a social? Is it a Study Session? The more the merrier."
        />

        <p className="create-account-styling">Event Logo:</p>
        <OrangeButton
          className="orange-button"
          buttonText={"Upload from your Device"}
        />
        <br></br> 
        <h1 className='login-error-message'>{PostEventError}</h1>
        <br></br>
        <GreenButton
          handleClick={submitEvent}
          className="green-button"
          buttonText={"Create Event"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default CreateEvent;
