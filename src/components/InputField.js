import '../styles/style.css'
const InputField = ({  type, value, onChange,placeholder ,id,name}) => (
    
      <input className="form-control mb-3"
        name={name}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e)=>{e.persist() 
          onChange(e.target.value)}}
        required
      />
    
  );
  export default InputField