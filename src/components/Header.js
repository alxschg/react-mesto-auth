import logo from "../images/logo.svg";

function Header({children}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <nav>
        <ul className="header__links">
          {(children.length > 1 ? children : [children]).map((item, pos) => (
            <li className="header__links-item" key={pos}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
