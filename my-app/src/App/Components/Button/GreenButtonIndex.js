import { useState } from "react";
// import "./button.css";

function GreenButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="green-button">
    
        {buttonText}
      </button>
  );
}
export default GreenButton;