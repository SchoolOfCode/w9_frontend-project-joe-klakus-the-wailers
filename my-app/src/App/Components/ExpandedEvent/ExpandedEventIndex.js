import React from 'react'
import LittleGreenButton from '../Button/LittleGreenButtonIndex.js'
import TinyGreenButton from '../Button/TinyGreenButtonIndex'
import TinyRedButton from '../Button/TinyRedButtonIndex'

const ExpandedEvent = (props) => {
    return (
        <div>
            <section className="expanding-events-section">
                <h1 className="h1-expanding-event">{props.text}</h1>
                <img />  
                <h2 className="h2-expanding-event">Brum.JS</h2>
                <p>Address<br></br>
                The Studio<br></br>
                Cannon Street<br></br>
                West Midlands<br></br>
                B2 5EP<br></br>
                </p>

                <p>Hosted by Brum.JS</p>

                <p>Attending</p>
                <TinyRedButton className="tiny-red-button" buttonText={"No"}/>
                <TinyGreenButton className="tiny-green-button" buttonText={"Yes"}/>

                <h2 className="h2-expanding-event">The Low Down</h2>
                <p>This is where the description of the event will go !!!</p>
                <LittleGreenButton className="little-green-button" buttonText={"Get Tickets"}/>



                


            </section>
        </div>
    )
}

export default ExpandedEvent