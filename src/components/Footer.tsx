import logo from "../assets/logo.jpeg";
import whatsapp from "../assets/wasapnegro.png";
import instagram from "../assets/instagramnegro.png";
import gmail from "../assets/gmailnegro.png";
import telefono from "../assets/telefononegro.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container footer-center">

        {/* LOGO + MARCA */}
        <div className="footer-brand">
          <h3>NeuroFamily</h3>
          <p>Centro de atención familiar</p>

          {/* ICONOS REDES */}
          <div className="footer-icons">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/56976683388?text=Hola%20quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/lore.terapiaocupacional/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" />
            </a>

            {/* CORREO */}
            <a
              href="mailto:lorenaagonzv@gmail.com"
              aria-label="Correo"
            >
              <img src={gmail} alt="Correo" />
            </a>

            {/* TELÉFONO */}
            <a
              href="tel:+56976683388"
              aria-label="Teléfono"
            >
              <img src={telefono} alt="Teléfono" />
            </a>

          </div>
        </div>

        {/* INFO */}
        <div className="footer-info">
          <p>Atención profesional y personalizada</p>
          <p>© 2026 · Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}
