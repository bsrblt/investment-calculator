export default function InputGroup({ label, name, value, onChange }) {
  function handleChange(event) {
    const value = +event.target.value;
    if (isNaN(value) || value < 0) return;
    onChange(event.target.name, value);
  }

  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        value={value}
        onChange={handleChange}
      />
    </p>
  );
}
