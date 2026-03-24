export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Lo que dicen las familias</h2>
        <p>
          La experiencia de quienes han confiado en nuestro acompañamiento
          terapéutico.
        </p>
      </div>

      <div className="testimonials-list">
        <div className="testimonial-card">
          <span className="stars">★★★★★</span>
          <h3>Un apoyo fundamental para nuestra familia</h3>
          <p>
            Desde que iniciamos terapia, hemos visto avances significativos en
            nuestro hijo, tanto a nivel motor como emocional. Nos sentimos
            acompañados en todo momento y con orientaciones claras para seguir
            trabajando en casa.
          </p>
        </div>

        <div className="testimonial-card">
          <span className="stars">★★★★★</span>
          <h3>Profesional cercana y muy comprometida</h3>
          <p>
            Destacamos su calidez y dedicación. Nuestro hijo participa feliz de
            cada sesión y los avances han sido constantes y evidentes.
          </p>
        </div>

        <div className="testimonial-card">
          <span className="stars">★★★★★</span>
          <h3>Más que terapia, un verdadero acompañamiento</h3>
          <p>
            No solo trabaja con nuestro hijo, también con nosotros como familia
            y el colegio. Nos ayudó a comprender mejor sus necesidades y a
            acompañarlo con mayor seguridad.
          </p>
        </div>

        <div className="testimonial-card">
          <span className="stars">★★★★★</span>
          <h3>Resultados visibles y trato humano</h3>
          <p>
            Desde las primeras sesiones notamos cambios positivos. Nuestro hijo
            ganó autonomía y confianza, y nosotros aprendimos mucho durante el
            proceso.
          </p>
        </div>

        <div className="testimonial-card">
          <span className="stars">★★★★★</span>
          <h3>Recomendada 100 %</h3>
          <p>
            Llegamos con muchas dudas y encontramos una profesional empática,
            clara y muy dedicada. Ha sido un gran apoyo para nuestra familia.
          </p>
        </div>
      </div>

      <div className="cta-box">
        <h3>💛 ¿Quieres acompañar el desarrollo de tu hijo?</h3>
        <p>
          Cada proceso es único y se construye en conjunto con la familia.
          Conversemos cómo apoyar a tu hijo de la mejor manera.
        </p>

        <a
          href="https://wa.me/56976683388"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Agendar una evaluación
        </a>
      </div>
    </section>
  );
}
