import React from 'react'
import LittleGreenButton from '../Button/LittleGreenButtonIndex.js'
import TinyGreenButton from '../Button/TinyGreenButtonIndex'
import TinyRedButton from '../Button/TinyRedButtonIndex'

const ExpandedEvent = (props) => {
    return (
        <div>
            <section onClick={props.onClick} className="expanding-events-section">
                <h1 className="h1-expanding-event">{props.text}</h1>
                <img style={{ display: props.visible }} className='event-image' alt={props.text} src={props.img}  />  
                <h2 className="h2-expanding-event">{props.name_of_event}</h2>
                <p style={{ display: props.visible }} className='host-heading'>Hosted by user{props.event_host}</p>
                <p style={{ display: props.visible }}>Address:<br></br>
                {props.house_number}<br></br>
                {props.town}<br></br>
                {props.region},<br></br>
                {props.postcode}<br></br>
                </p>

                
                <div style={{ display: props.visible }} className='attending'>
                <p style={{ display: props.visible }} className='attending-heading'>Attending?</p>
                <TinyGreenButton style={{ display: props.visible }} className="tiny-green-button" buttonText={"Yes"}/>
                <TinyRedButton style={{ display: props.visible }} className="tiny-red-button" buttonText={"No"}/>
                </div>
                <br></br>
                <h2 style={{ display: props.visible }} className="h2-expanding-event">The Low Down</h2>
                <p style={{ display: props.visible }} className='description-box'>{props.description}</p>
                <LittleGreenButton style={{ display: props.visible }} className="little-green-button" buttonText={"Get Tickets"}/>
                <br></br>
                <br></br>



                


            </section>
        </div>
    )
}

export default ExpandedEvent