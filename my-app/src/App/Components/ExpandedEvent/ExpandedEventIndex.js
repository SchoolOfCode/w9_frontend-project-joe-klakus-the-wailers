import React from "react";
import LittleGreenButton from "../Button/LittleGreenButtonIndex.js";
import TinyGreenButton from "../Button/TinyGreenButtonIndex";
import TinyRedButton from "../Button/TinyRedButtonIndex";
import { useState } from "react";

const ExpandedEvent = (props) => {
  const [visible, setVisible] = useState("none");

  //Formats the date into readable string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div>
      <section
        className="expanding-events-section"
        onClick={() => {
          visible === "none" ? setVisible("") : setVisible("none");
        }}
      >
        <h1 className="h1-expanding-event">{props.text}</h1>
        <img
          style={{ display: visible }}
          className="event-image"
          alt={props.text}
          src={props.img}
        />
        <h2 className="h2-expanding-event">{props.name_of_event}</h2>
        <p style={{ display: visible }} className="host-heading">
          Hosted by {props.name_of_event_host}
        </p>
        <p style={{ display: visible }} className="start-time">
          Starts {formatDate(props.start_time)}
        </p>
        <p style={{ display: visible }} className="end-time">
          Ends {formatDate(props.end_time)}
        </p>
        <p style={{ display: visible }}>
          Address:<br></br>
          {props.house_number}
          <br></br>
          {props.town}
          <br></br>
          {props.region},<br></br>
          {props.postcode}
          <br></br>
        </p>

        <div style={{ display: visible }} className="attending">
          <p style={{ display: visible }} className="attending-heading">
            Attending?
          </p>
          <TinyGreenButton
            style={{ display: visible }}
            className="tiny-green-button"
            buttonText={"Yes"}
          />
          <TinyRedButton
            style={{ display: visible }}
            className="tiny-red-button"
            buttonText={"No"}
          />
        </div>
        <br></br>
        <h2 style={{ display: visible }} className="h2-expanding-event">
          The Low Down
        </h2>
        <p style={{ display: visible }} className="description-box">
          {props.description}
        </p>
        <LittleGreenButton
          style={{ display: visible }}
          className="little-green-button"
          buttonText={"Get Tickets"}
        />
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default ExpandedEvent;
