// import "./button.css";

function TinyConstructiveButton({ handleClick, buttonText }) {
    return (
        <button onClick={handleClick } className="tiny-constructive-button">
      
          {buttonText}
        </button>
    );
  }
  export default TinyConstructiveButton