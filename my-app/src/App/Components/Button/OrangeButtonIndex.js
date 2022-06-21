import { useState } from "react";
// import "./button.css";

function OrangeButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="orange-button">
    
        {buttonText}
      </button>
  );
}
export default OrangeButton;