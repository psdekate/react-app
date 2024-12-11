import "../Main/TabContent.css";

export function TabContent({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
