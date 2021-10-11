export function NumInput({ name, value, onChange }) {
  return (
    <div>
      <input type="number" name={name} value={value} onChange={onChange} />
    </div>
  );
}
