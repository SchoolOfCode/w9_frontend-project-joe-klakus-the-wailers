import React, {useState} from "react";

function LargeFormInput(props) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')

  function handleChange(event){
    setInputValue(event.target.value);
    console.log(inputValue)
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
      <textarea type={inputType} value={inputValue} name="input-form" onChange={handleChange} className="large-text-input" placeholder={props.placeholder}/>
    </>
  );
}
export default LargeFormInput;
