import { useState } from "react";
// import "./button.css";

function Button({ handleClick, buttonText }) {
  return (
      <button className="Button" onClick={handleClick}>
        {buttonText}
      </button>
  );
}
export default Button;