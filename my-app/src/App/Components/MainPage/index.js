import React from "react";
import GreenButton from "../Button/GreenButtonIndex";
import FormInput from "../InputTypeText/Input-Index";
import OrangeButton from "../Button/OrangeButtonIndex";
import LittleRedButton from "../Button/LittleRedButtonindex.js";
import ExpandedEvent from "../ExpandedEvent/ExpandedEventIndex";
import Map from "../map/map2.js";
import LittleGreenButton from "../Button/LittleGreenButtonIndex";
import DropDown from "../DropDown/DropDownIndex";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MainPage = () => {
	const [events, setEvents] = useState("");
	const [visible, setVisible] = useState("none");

	useEffect(() => {
		//get the events
		async function fetchData() {
			const res = await fetch("http://localhost:5000/events", {
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			});
			const data = await res.json();
			setEvents(data.Payload);
			return data;
		}
		//runs the function
		fetchData();
	}, []);

	const MainPage = ({ id }) => {
		return (
			<div>
				<header className="header">
					<img
						className="our-logo"
						src="https://i.ibb.co/SJKYb1L/logov1-copy.png"
						alt="Bootcamper Social Logo"
					/>
					<p className="profile-icon">{id}</p>
				</header>

				<p className="search-bar-label">Search By Event, Host or Region</p>
				<FormInput name="username-input" placeholder="Search Here" />
				<br></br>
				<br></br>
				<div id="map">
					<Map />
				</div>
				<br></br>
				<br></br>
				<Link to="/newe">
					<GreenButton className="green-button" buttonText={"Add an Event"} />
				</Link>
				<br></br>

				<DropDown className="drop-down-styling" />

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

				<ul className="event-list-main-page">
					{events &&
						events.map((event) => (
							<li className="expanded-event-container">
								<ExpandedEvent
									name_of_event={event.name_of_event}
									cost={event.cost}
									description={event.description}
									end_time={event.end_time}
									event_host={event.event_host}
									events_id={event.events_id}
									house_number={event.house_number}
									lat={event.lat}
									long={event.lat}
									postcode={event.postcode}
									region={event.region}
									start_time={event.start_time}
									street_address={event.street_address}
									town={event.town}
									visible={visible}
									onClick={() => {
										visible === "none" ? setVisible("") : setVisible("none");
									}}
								/>
							</li>
						))}
				</ul>
			</div>
		);
	};
};
export default MainPage;
