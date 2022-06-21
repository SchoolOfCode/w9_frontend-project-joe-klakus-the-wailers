
import './App.css';
import Login from '../Login';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
    <Login text=""/>
    </div>
  );
}

export default App;
