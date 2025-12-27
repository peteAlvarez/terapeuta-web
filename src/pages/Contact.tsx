import telAzul from "../assets/telazul.png";
import correo from "../assets/correo.png";
import whatsapp from "../assets/wasapv.png";

export default function Contact() {
  return (
    <section className="contact-section fade-in">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-subtitle">
        Agenda tu atención o realiza consultas de forma rápida y directa
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <img
            src={telAzul}
            alt="Teléfono"
            className="contact-icon"
          />
          <div>
            <h4>Teléfono</h4>
            <p>+56 9 7668 3388</p>
          </div>
        </div>

        <div className="contact-item">
          <img
            src={correo}
            alt="Correo electrónico"
            className="contact-icon"
          />
          <div>
            <h4>Email</h4>
            <p>lorenaagonzv@gmail.com</p>
          </div>
        </div>

        <a
          href="https://wa.me/56976683388?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          <span>Agendar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
