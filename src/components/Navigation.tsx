import { Link } from "react-router-dom";
import logo from "../assets/logosinfondo.png"; // o la imagen que ya usas

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="Neuro Family"
            className="brand-logo"
          />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/testimonios">Testimonios</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <a
          href="https://wa.me/56964857043?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Contactar por WhatsApp
        </a>

      </div>
    </nav>
  );
}
