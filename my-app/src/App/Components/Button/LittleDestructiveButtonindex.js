// import "./button.css";

function LittleDestructiveButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="little-destructive-button">
    
        {buttonText}
      </button>
  );
}
export default LittleDestructiveButton