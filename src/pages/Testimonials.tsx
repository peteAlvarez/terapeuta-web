export default function Testimonials() {
  return (
    <section className="testimonials fade-in">
      <h2>Testimonios</h2>
      <p className="section-description">
        Experiencias de familias que han confiado en mi trabajo profesional.
      </p>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Gracias al acompañamiento terapéutico, mi hijo logró mayor
            autonomía y seguridad en sus actividades diarias.”
          </p>
          <span className="testimonial-author">
            — Madre de paciente, Santiago
          </span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Un trato muy humano y profesional. Se nota la vocación y el
            compromiso en cada sesión.”
          </p>
          <span className="testimonial-author">
            — Padre de paciente
          </span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Las sesiones a domicilio marcaron una gran diferencia para
            nuestra familia.”
          </p>
          <span className="testimonial-author">
            — Apoderada
          </span>
        </div>
      </div>
    </section>
  );
}
