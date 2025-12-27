import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logosinfondo.png";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="brand">
          <img src={logo} alt="NeuroFamily" className="brand-logo" />
          <span className="brand-text">NeuroFamily</span>
        </Link>

        {/* BOTÓN VAQUITA */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          ☰
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/quienes-somos" onClick={() => setOpen(false)}>Quiénes Somos</Link></li>
          <li><Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
          <li><Link to="/testimonios" onClick={() => setOpen(false)}>Testimonios</Link></li>
          <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/56976683388?text=Hola,%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn nav-button"
        >
          <span>WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}

