import { useState } from "react";
// import "./button.css";

function DestructiveButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="destructive-button">
    
        {buttonText}
      </button>
  );
}
export default DestructiveButton;