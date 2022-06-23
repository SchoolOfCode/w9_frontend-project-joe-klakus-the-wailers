function FormInput(props) {

  return (
    <>
      <input type={props.inputType} name={props.name} onChange={props.handleChange} className="inputclass" placeholder={props.placeholder} required/>
    </>
  );
}
export default FormInput;
