export function Btn({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export function ClrBtn({ onClick, children }) {
  return (
    <button className="clear-btn" onClick={onClick}>
      {children}
    </button>
  );
}
