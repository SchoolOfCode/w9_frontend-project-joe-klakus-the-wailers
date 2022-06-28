import "./App.css";
import Login from "../Login";
import CreateUser from "../CreateUser";
import CreateEvent from "../CreateEvent";
import ProfilePage from "../ProfilePage";
import MainPage from "./Components/MainPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "../App/jwt-decode.js";

function App() {
	const [id, setId] = useState(0);
	const [token, setToken] = useState("");

	useEffect(() => {
		//checks to see if the user is logged in ie. has a valid token
		async function fetchRefreshToken() {
			const res = await fetch("http://localhost:5000/refresh_token", {
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			});
			//saves the encrypted token to state (bad practice i think needs to be changed later)
			const jsonResponse = await res.json();
			setToken(jsonResponse.accessToken);
			// decodes the token to get the user id
			if (jsonResponse.accessToken) {
				const jwtDecoded = jwtDecode(jsonResponse.accessToken);
				setId(jwtDecoded.user_id);
				return jsonResponse.refreshToken;
			}
		}
		//runs the function
		fetchRefreshToken();
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={
							!token ? (
								<Login text="" />
							) : (
								<MainPage id={id} token={token}></MainPage>
							)
						}
					/>
					<Route path="/newu" element={<CreateUser text="" />}></Route>
					<Route path="/newe" element={<CreateEvent id={id} text="" />}></Route>
					<Route
						path="/updateu"
						element={<ProfilePage id={id} text="" />}
					></Route>
					<Route
						path="/main"
						element={<MainPage text="" id={id} token={token} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
//Push
export default App;
