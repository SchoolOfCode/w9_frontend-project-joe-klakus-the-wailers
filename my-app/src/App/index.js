import './App.css';
import Login from '../Login';
import CreateUser from '../CreateUser';
import CreateEvent from '../CreateEvent';
import ProfilePage from '../ProfilePage';
import ProfilePageLocked from '../ProfilePage/lockedprofileIndex';
import MainPage from './Components/MainPage';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
   {/* <Login text=""/>  
    <CreateUser text=""/> 
    <CreateEvent text=""/> 
    <ProfilePage text=""/> 
    <ProfilePageLocked text=""/> */}
    <MainPage text=""/>
    </div>
  );
}

export default App;

Pushing tEST cOMMENT

