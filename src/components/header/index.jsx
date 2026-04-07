import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h2 className="logo">NETFLIX</h2>

        <nav className="links">
          <Link to="/">
            <a href="">Início</a>
          </Link>
          <Link to="/series">
            <a href="">Séries</a>
          </Link>
          <Link to="/minhalista">
            <a href="">Minha Lista</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
