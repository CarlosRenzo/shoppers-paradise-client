import { Link } from "react-router-dom";
import "../styles/components/NavBar.css";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="logo font-black">
        Shopper's Paradise
      </Link>
      <nav>
        <Link to="/" className="item-text">Polos</Link>
        <Link to="/" className="item-text">Casacas</Link>
        <Link to="/" className="item-text">Pantalones</Link>
        <Link to="/" className="item-text">Calzado</Link>
        <Link to="/" className="item-text">Contacto</Link>
      </nav>
      <div className="icons">
        <button type="button">
          <i className="fas fa-user"></i>
        </button>
        <button type="button">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button type="button">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};
