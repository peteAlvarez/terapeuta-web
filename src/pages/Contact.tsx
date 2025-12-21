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
            src="/src/assets/telazul.png"
            alt="Teléfono"
            className="contact-icon"
          />
          <div>
            <h4>Teléfono</h4>
            <p>+56 9 6485 7043</p>
          </div>
        </div>

        <div className="contact-item">
          <img
            src="/src/assets/correo.png"
            alt="Correo electrónico"
            className="contact-icon"
          />
          <div>
            <h4>Email</h4>
            <p>contacto@lorenagonzalez.cl</p>
          </div>
        </div>

        <a
          href="https://wa.me/56964857043?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img
            src="/src/assets/wasapv.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          <span>Agendar por WhatsApp</span>
        </a>

      </div>
    </section>
  );
}
