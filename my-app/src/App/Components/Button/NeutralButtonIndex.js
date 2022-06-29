
// import "./button.css";

function NeutralButton({ handleClick, buttonText }) {
  return (
      <button onClick={handleClick } className="neutral-button">
    
        {buttonText}
      </button>
  );
}
export default NeutralButton;