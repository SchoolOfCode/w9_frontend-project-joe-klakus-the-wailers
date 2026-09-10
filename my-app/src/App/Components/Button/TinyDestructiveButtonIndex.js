// import "./button.css";

function TinyDestructiveButton({ handleClick, buttonText }) {
  return (
    <button onClick={handleClick} className="tiny-destructive-button">
      {buttonText}
    </button>
  );
}
export default TinyDestructiveButton;
