import { useState } from "react";
// import "./button.css";

function RedButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="red-button">
    
        {buttonText}
      </button>
  );
}
export default RedButton;