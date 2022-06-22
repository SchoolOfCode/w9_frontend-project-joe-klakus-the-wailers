import './App.css';
import Login from '../Login';
import CreateUser from '../CreateUser';
import CreateEvent from '../CreateEvent';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

// import ProfilePage from '../ProfilePage';
// import ProfilePageLocked from '../ProfilePage/lockedprofileIndex';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(false)
    console.log(isLoggedIn)
  }

  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route index element={isLoggedIn ? <Login onClickLogin={toggleLogin} text=""/>: <h1>mainpage logged in!</h1>}/>
    <Route path="/newu" element={<CreateUser text=""/> }></Route>
    <Route path="/newe" element={<CreateEvent text=""/> }></Route>
    {/* <ProfilePage text=""/> 
    <ProfilePageLocked text=""/> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

