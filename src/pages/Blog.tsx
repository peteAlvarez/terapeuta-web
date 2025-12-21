export default function Blog() {
  return (
    <section className="blog fade-in">
      <h2>Blog</h2>
      <p className="section-description">
        Información, orientación y contenidos sobre terapia ocupacional y
        neurodesarrollo.
      </p>

      <div className="blog-grid">
        <article className="blog-card">
          <h3>¿Qué es la Terapia Ocupacional infantil?</h3>
          <p>
            La terapia ocupacional ayuda a niños y adolescentes a desarrollar
            habilidades para su vida diaria, promoviendo autonomía y bienestar.
          </p>
          <button className="btn-secondary">Leer más</button>
        </article>

        <article className="blog-card">
          <h3>Integración sensorial: claves para entenderla</h3>
          <p>
            Comprender cómo el sistema sensorial influye en la conducta y el
            aprendizaje es fundamental para apoyar el desarrollo infantil.
          </p>
          <button className="btn-secondary">Leer más</button>
        </article>

        <article className="blog-card">
          <h3>Importancia de las rutinas en el hogar</h3>
          <p>
            Las rutinas estructuradas favorecen la seguridad, organización y
            participación de niños y adolescentes.
          </p>
          <button className="btn-secondary">Leer más</button>
        </article>
      </div>
    </section>
  );
}
