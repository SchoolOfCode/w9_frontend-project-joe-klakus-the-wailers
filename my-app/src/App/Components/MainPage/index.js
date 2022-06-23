import React from 'react'
import GreenButton from '../Button/GreenButtonIndex'
import FormInput from '../InputTypeText/Input-Index'
import OrangeButton from '../Button/OrangeButtonIndex'
import LittleRedButton from '../Button/LittleRedButtonindex.js'
import ExpandedEvent from '../ExpandedEvent/ExpandedEventIndex'
import Map from '../map/map2.js'
import LittleGreenButton from '../Button/LittleGreenButtonIndex'
import DropDown from '../DropDown/DropDownIndex'
import { Link } from 'react-router-dom'


const MainPage = ({id}) => {
    return (
        <div>
        <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        <p className='profile-icon'>{id}</p>
      </header> 
        
      <p className="search-bar-label">Search By Event, Host or Region</p>
      <FormInput name="username-input" placeholder="Search Here"/>
      <br></br>
      <br></br>
      <div id="map"><Map/></div>
        <br></br>
    <br></br>
    <Link to="/newe">
      <GreenButton className="green-button" buttonText={"Add an Event"}/>
      </Link>
    <br></br>

    <DropDown className="drop-down-styling"/>
    
{/*
    <p>Filter</p>
    <ul>
        <li>Date (Start Time)</li>
        <li>Date (End Time)</li>
        <li>Organizer / Host</li>
        <li>Distance</li>
        <li>Type of Event</li>
    </ul>
*/}


    <ul className='event-list-main-page'>
        <ii><OrangeButton className="orange-button" buttonText={"Brum.JS"}/></ii>
        <ii><OrangeButton className="orange-button" buttonText={"Tech Rootz"}/></ii>
        <ii><OrangeButton className="orange-button" buttonText={"Sign & Digital 2023 UK"}/></ii>
        <ii><OrangeButton className="orange-button" buttonText={"WITB Social Network and Mingle"}/></ii>
        <li className='expanded-event-container'><ExpandedEvent/></li>
    </ul>
        </div>
    )
}

export default MainPage