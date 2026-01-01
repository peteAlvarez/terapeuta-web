import telAzul from "../assets/telazul.png";
import correo from "../assets/correo.png";
import whatsapp from "../assets/wasapv.png";
import instagram from "../assets/instagram.png"; // ⬅ agrega este icono

export default function Contact() {
  return (
    <section className="contact-section fade-in">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-subtitle">
        Agenda tu atención o realiza consultas de forma rápida y directa
      </p>

      <div className="contact-card">

        {/* TELÉFONO */}
        <a
          href="tel:+56976683388"
          className="contact-item contact-link"
        >
          <img
            src={telAzul}
            alt="Teléfono"
            className="contact-icon"
          />
          <div>
            <h4>Teléfono</h4>
            <p>+56 9 7668 3388</p>
          </div>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:lorenaagonzv@gmail.com"
          className="contact-item contact-link"
        >
          <img
            src={correo}
            alt="Correo electrónico"
            className="contact-icon"
          />
          <div>
            <h4>Email</h4>
            <p>lorenaagonzv@gmail.com</p>
          </div>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/lore.terapiaocupacional/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item contact-link"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="contact-icon"
          />
          <div>
            <h4>Instagram</h4>
            <p>@lore.terapiaocupacional</p>
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/56976683388?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          
          <span>Agendar por WhatsApp</span>
        </a>

      </div>
    </section>
  );
}
