import "../styles/style.css";
const InputField = (
  { type, value, onChange, placeholder, id, name, required },
  i
) => (
  <input
    className="form-control"
    key={i}
    name={name}
    type={type}
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
);
export default InputField;
