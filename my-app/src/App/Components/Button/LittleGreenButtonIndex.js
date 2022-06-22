// import "./button.css";

function LittleGreenButton({ handleClick, buttonText }) {
    return (
        <button onClick={handleClick } className="little-green-button">
      
          {buttonText}
        </button>
    );
  }
  export default LittleGreenButton