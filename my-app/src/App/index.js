import './App.css';
import Login from '../Login';
import CreateUser from '../CreateUser';
import CreateEvent from '../CreateEvent';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
    {/* <Login text=""/> 
    <CreateUser text=""/> */}
    <CreateEvent text=""/>
    </div>
  );
}

export default App;

