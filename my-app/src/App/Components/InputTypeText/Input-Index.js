// import React, { useState } from "react";

// function Input(props) {
// //   const [text, setText] = useState("");

//   console.log(props.text)

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(event) => props.setText(event.target.value)}
//       ></input>

//     </div>
//   );
// }

// export default Input;


import React, {useState} from "react";

function FormInput(props) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')

  function handleChange(event){
    setInputValue(event.target.value);
    console.log(inputValue)
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
      <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} className="inputclass" placeholder={props.placeholder}/>
    </>
  );
}
export default FormInput;
