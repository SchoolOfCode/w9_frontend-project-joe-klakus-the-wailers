import React from 'react'
import LittleGreenButton from '../Button/LittleGreenButtonIndex.js'
import TinyGreenButton from '../Button/TinyGreenButtonIndex'
import TinyRedButton from '../Button/TinyRedButtonIndex'

const ExpandedEvent = (props) => {
    return (
        <div>
            <section className="expanding-events-section">
                <h1 className="h1-expanding-event">{props.text}</h1>
                <img className='event-image' alt={props.text} src="https://pbs.twimg.com/profile_images/1408775037998469121/tzArk3Rr_400x400.jpg"  />  
                <h2 className="h2-expanding-event">Brum.JS</h2>
                <p className='host-heading'>Hosted by Brum.JS</p>
                <p>Address:<br></br>
                The Studio,<br></br>
                Cannon Street,<br></br>
                West Midlands,<br></br>
                B2 5EP<br></br>
                </p>

                
                <div className='attending'>
                <p className='attending-heading'>Attending?</p>
                <TinyGreenButton className="tiny-green-button" buttonText={"Yes"}/>
                <TinyRedButton className="tiny-red-button" buttonText={"No"}/>
                </div>
                <br></br>
                <h2 className="h2-expanding-event">The Low Down</h2>
                <p className='description-box'>This is where the description of the event will go !!!</p>
                <LittleGreenButton className="little-green-button" buttonText={"Get Tickets"}/>
                <br></br>
                <br></br>



                


            </section>
        </div>
    )
}

export default ExpandedEvent