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
	const [sortType, setSortType] = useState('albums');
	// const [visible, setVisible] = useState("none");
	const navigate = useNavigate();

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
			setData(data.Payload);
			return data;
		}
		//runs the function
		fetchData();
	}, []);

	useEffect(() => {
		//sorts the data
		const sortArray = type => {
			const types = {
				name_of_event: 'name_of_event',
				event_host: 'event_host',
				start_time: 'start_time',
				end_time: 'end_time',
			};
			const sortProperty = types[type];
			const sorted = [...data].sort((a, b) => {
				return  b[sortProperty] - a[sortProperty] ;
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
						navigate("/updateu");
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
				<Link to="/newe">
					<GreenButton className="green-button" buttonText={"Add an Event"} />
				</Link>
			) : (
				""
			)}
			<br></br>

			<div>
				<div className="dropdown">
					<select onChange={e => setSortType(e.target.value)} className="drop-down-styling">
						<option value="start_time">Date (Start Time)</option>
						<option value="end_time">Date (End Time)</option>
						<option value="event_host">Organizer</option>
						<option value="Distance">Distance</option>
						<option value="name_of_event">Name of Event</option>
					</select>
				</div>
			</div>
			<ul className="event-list-main-page">
				{events &&
					events.map((event) => (
						<li key={event.events_id} className="expanded-event-container">
							<ExpandedEvent
								img={
									"https://pbs.twimg.com/profile_images/1408775037998469121/tzArk3Rr_400x400.jpg"
								}
								name_of_event={event.name_of_event}
								cost={event.cost}
								description={event.description}
								end_time={event.end_time}
								event_host={event.event_host}
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
