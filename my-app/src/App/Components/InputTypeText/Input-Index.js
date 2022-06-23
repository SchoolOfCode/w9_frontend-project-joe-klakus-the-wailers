function FormInput(props) {

  return (
    <>
      <input style={{pointerEvents:props.disabled, color:props.isDisabledText}} type={props.inputType} name={props.name} onChange={props.handleChange} className="inputclass" placeholder={props.placeholder} required={props.required} 
      defaultValue = {props.default} />
    </>
  );
}
export default FormInput;
