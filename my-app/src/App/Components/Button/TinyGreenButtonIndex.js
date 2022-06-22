// import "./button.css";

function TinyGreenButton({ handleClick, buttonText }) {
    return (
        <button onClick={handleClick } className="tiny-green-button">
      
          {buttonText}
        </button>
    );
  }
  export default TinyGreenButton;