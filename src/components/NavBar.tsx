import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <h1>
        <Link to="/">Shopper's Paradise</Link>
      </h1>
      <nav className="flex bg-white flex-wrap">
        <ul className="flex flex-wrap">
          <li>Hombres</li>
          <li>Mujeres</li>
          <li>Calzado</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};
