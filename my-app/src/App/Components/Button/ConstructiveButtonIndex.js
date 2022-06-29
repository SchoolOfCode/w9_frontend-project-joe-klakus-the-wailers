
// import "./button.css";

function ConstructiveButton({ handleClick, buttonText, type }) {
  return (
      <button type={type} onClick={handleClick} className="constructive-button">
    
        {buttonText}
      </button>
  );
}
export default ConstructiveButton;