import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">Lorena González</Link>

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
          <span>Contactar por WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
