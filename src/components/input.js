function Input({ id, name, type="text", value, onChange, placeholder, label }) {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
