// import "./button.css";

function LittleRedButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="little-red-button">
    
        {buttonText}
      </button>
  );
}
export default LittleRedButton;