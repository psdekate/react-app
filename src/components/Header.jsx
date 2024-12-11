import "../components/Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <h2>React essentials</h2>
        <nav className="menuList">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </nav>
      </div>
    </>
  );
}
