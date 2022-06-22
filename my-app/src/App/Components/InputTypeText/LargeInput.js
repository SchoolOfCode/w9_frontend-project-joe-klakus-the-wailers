function LargeFormInput(props) {


  return (
    <>
      <textarea type={props.inputType} name={props.name} onChange={props.handleChange} className="large-text-input" placeholder={props.placeholder}/>
    </>
  );
}
export default LargeFormInput;