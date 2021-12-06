import '../styles/style.css'
const InputField = ({  type, value, onChange,placeholder ,id,name,required}) => (
    
      <input className="form-control"
        name={name}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    
  );
  export default InputField