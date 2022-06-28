import React from "react";
import GreenButton from "../Button/GreenButtonIndex";
import FormInput from "../InputTypeText/Input-Index";
import ExpandedEvent from "../ExpandedEvent/ExpandedEventIndex";
import Map from "../map/map2.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = ({ id, token }) => {
  const [events, setEvents] = useState("");
  const [data, setData] = useState("");
  const [sortType, setSortType] = useState("albums");
  const navigate = useNavigate();

  //Gets GPS Position and works out distances TODO

  useEffect(() => {
    //gets the events
    async function fetchData() {
      const res = await fetch("http://localhost:5000/events", {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      const data = await res.json();
      setData(data.Payload);
      return data;
    }
    //runs the function
    fetchData();
  }, []);

  useEffect(() => {
    //sorts the data using a sorting table linked to the filters dropdown
    //Currently the sort by location does not have a function TODO
    const sortArray = (type) => {
      const types = {
        name_of_event: "name_of_event",
        name_of_event_host: "name_of_event_host",
        start_time: "start_time",
        end_time: "end_time",
      };
      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) => {
        if (sortProperty === "name_of_event") {
          return a.name_of_event.localeCompare(b.name_of_event);
        } else if (sortProperty === "name_of_event_host") {
          return a.name_of_event_host.localeCompare(b.name_of_event_host);
        } else {
          return Date.parse(a[sortProperty]) - Date.parse(b[sortProperty]);
        }
      });
      setEvents(sorted);
    };

    sortArray(sortType);
  }, [data, sortType]);

  return (
    <div>
      <header className="header">
        <img
          className="our-logo"
          src="https://i.ibb.co/SJKYb1L/logov1-copy.png"
          alt="Bootcamper Social Logo"
        />
        <p
          className="profile-icon"
          onClick={() => {
            navigate("/updateUserPage");
          }}
        >
          {id === 0 ? "G" : id}
        </p>
      </header>

      <p className="search-bar-label">Search By Event, Host or Region</p>
      <FormInput name="username-input" placeholder="Search Here" />
      <br></br>
      <br></br>
      <div id="map">{events && <Map events={events} />}</div>
      <br></br>
      <br></br>
      {token ? (
        <Link to="/newEventPage">
          <GreenButton className="green-button" buttonText={"Add an Event"} />
        </Link>
      ) : (
        ""
      )}
      <br></br>

      <div>
      {/*Renders the filter menu*/}
        <div className="dropdown">
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="drop-down-styling"
          >
            <option value="start_time">Date (Start Time)</option>
            <option value="end_time">Date (End Time)</option>
            <option value="name_of_event_host">Organizer</option>
            <option value="distance">Distance</option>
            <option value="name_of_event">Name of Event</option>
          </select>
        </div>
      </div>
       {/*Renders the events list*/}
      <ul className="event-list-main-page">
        {events &&
          events.map((event) => (
            <li key={event.events_id} className="expanded-event-container">
              <ExpandedEvent
                img={event.img_url}
                name_of_event={event.name_of_event}
                cost={event.cost}
                description={event.description}
                end_time={event.end_time}
                event_host={event.event_host}
                name_of_event_host={event.name_of_event_host}
                events_id={event.events_id}
                house_number={event.house_number}
                lat={event.lat}
                long={event.long}
                postcode={event.postcode}
                region={event.region}
                start_time={event.start_time}
                street_address={event.street_address}
                town={event.town}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MainPage;
