export default function Blog() {
  return (
    <section className="blog fade-in">
      {/* HEADER */}
      <header style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 70px" }}>
        <h2>Blog & Recursos</h2>
        <p className="section-description">
          Artículos creados para orientar a familias, cuidadores y profesionales,
          con información clara, cercana y basada en la experiencia clínica.
        </p>
      </header>

      {/* GRID DE ARTÍCULOS */}
      <div className="blog-grid">
        {/* CARD 1 */}
        <article className="blog-card">
          <span className="blog-tag">Terapia Ocupacional</span>

          <h3>¿Qué es la Terapia Ocupacional infantil?</h3>

          <p>
            Descubre cómo la terapia ocupacional acompaña a niños y niñas en el
            desarrollo de habilidades esenciales para su autonomía, participación
            y bienestar en la vida diaria.
          </p>

          <button className="btn-secondary">
            Leer artículo →
          </button>
        </article>

        {/* CARD 2 */}
        <article className="blog-card">
          <span className="blog-tag">Neurodesarrollo</span>

          <h3>Integración sensorial: claves para entenderla</h3>

          <p>
            Comprender cómo el sistema sensorial influye en la conducta, el
            aprendizaje y la regulación emocional es fundamental para apoyar el
            desarrollo infantil de forma respetuosa.
          </p>

          <button className="btn-secondary">
            Leer artículo →
          </button>
        </article>

        {/* CARD 3 */}
        <article className="blog-card">
          <span className="blog-tag">Familia & Hogar</span>

          <h3>La importancia de las rutinas en el hogar</h3>

          <p>
            Las rutinas estructuradas entregan seguridad, organización y
            predictibilidad, favoreciendo la participación activa de niños y
            adolescentes en su entorno cotidiano.
          </p>

          <button className="btn-secondary">
            Leer artículo →
          </button>
        </article>
      </div>

      {/* CTA FINAL */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h3 style={{ marginBottom: "14px", color: "#0369a1" }}>
          ¿Te gustaría recibir más contenido?
        </h3>

        <p style={{ maxWidth: "650px", margin: "0 auto 28px", color: "#475569" }}>
          Publicamos contenido pensado para acompañarte en el proceso terapéutico,
          entregando orientación clara y práctica para el día a día.
        </p>

        <a
          href="/contacto"
          className="whatsapp-button"
          style={{ margin: "0 auto" }}
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
