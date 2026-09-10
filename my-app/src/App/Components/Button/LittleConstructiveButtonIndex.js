// import "./button.css";

function LittleConstructiveButton({ handleClick, buttonText }) {
  return (
    <button onClick={handleClick} className="little-constructive-button">
      {buttonText}
    </button>
  );
}
export default LittleConstructiveButton;
