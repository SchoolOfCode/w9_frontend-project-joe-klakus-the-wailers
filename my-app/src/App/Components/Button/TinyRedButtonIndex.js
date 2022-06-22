// import "./button.css";

function TinyRedButton({ handleClick, buttonText }) {
    return (
        <button onClick={handleClick } className="tiny-red-button">
      
          {buttonText}
        </button>
    );
  }
  export default TinyRedButton;