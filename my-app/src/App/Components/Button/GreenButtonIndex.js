
// import "./button.css";

function GreenButton({ handleClick, buttonText, type }) {
  return (
      <button type={type} onClick={handleClick} className="green-button">
    
        {buttonText}
      </button>
  );
}
export default GreenButton;