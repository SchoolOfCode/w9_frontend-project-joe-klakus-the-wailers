import './App.css';
import Login from '../Login';
import CreateUser from '../CreateUser';
import CreateEvent from '../CreateEvent';
import ProfilePage from '../ProfilePage';
import ProfilePageLocked from '../ProfilePage/lockedprofileIndex';
import MainPage from './Components/MainPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(false)
    console.log(isLoggedIn)
  }
//comment here
return (
  <div className="app">
  <BrowserRouter>
  <Routes>
  <Route index element={isLoggedIn ? <Login onClickLogin={toggleLogin} text=""/>: <MainPage></MainPage>}/>
  <Route path="/newu" element={<CreateUser text=""/> }></Route>
  <Route path="/newe" element={<CreateEvent text=""/> }></Route>
  <Route path="/updateu" element={<ProfilePage text=""/> }></Route>
  {/* <ProfilePageLocked text=""/> */} */}
  </Routes>
  </BrowserRouter>
  </div>
);
}

export default App;

