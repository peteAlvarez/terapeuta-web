export default function Home() {
  return (
    <main className="home">
      {/* HERO (NO SE TOCA) */}
      <section className="hero fade-in">
        <h2>Terapia Ocupacional</h2>

        <p>
          Atención integral enfocada en mejorar la autonomía, funcionalidad
          y calidad de vida en niños, adultos y adultos mayores.
        </p>
      </section>

      {/* ÁREAS DE ATENCIÓN (NO SE TOCA) */}
      <section>
        <h2>Áreas de Atención</h2>

        <div className="grid">
          <div className="card">
            <div className="image">Imagen</div>
            <h3>Infancia</h3>
            <p>Estimulación temprana y apoyo al desarrollo infantil.</p>
          </div>

          <div className="card">
            <div className="image">Imagen</div>
            <h3>Adultos</h3>
            <p>Rehabilitación física y apoyo funcional.</p>
          </div>

          <div className="card">
            <div className="image">Imagen</div>
            <h3>Adulto Mayor</h3>
            <p>Mantención de la autonomía y prevención de dependencia.</p>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN – SOBRE LA TERAPIA */}
      <section className="fade-in">
        <h2>¿En qué consiste la Terapia Ocupacional?</h2>
        <p style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          La Terapia Ocupacional acompaña a personas en todas las etapas de la
          vida, promoviendo la participación activa en las actividades
          significativas del día a día, fortaleciendo la independencia y la
          calidad de vida.
        </p>
      </section>

      {/* NUEVA SECCIÓN – BENEFICIOS */}
      <section className="fade-in">
        <h2>Beneficios del acompañamiento terapéutico</h2>

        <div className="grid">
          <div className="card">
            <h3>Mayor autonomía</h3>
            <p>
              Desarrollo de habilidades funcionales para la vida diaria,
              fortaleciendo la independencia personal.
            </p>
          </div>

          <div className="card">
            <h3>Mejor calidad de vida</h3>
            <p>
              Intervenciones centradas en la persona, respetando sus
              necesidades, intereses y entorno.
            </p>
          </div>

          <div className="card">
            <h3>Acompañamiento familiar</h3>
            <p>
              Orientación y apoyo continuo a familias y cuidadores durante todo
              el proceso terapéutico.
            </p>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN – LLAMADO A LA ACCIÓN */}
      <section className="fade-in" style={{ textAlign: "center" }}>
        <h2>Agenda una evaluación</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px" }}>
          Si buscas un acompañamiento profesional, humano y personalizado,
          agenda una evaluación y comienza el proceso terapéutico hoy.
        </p>

        <a
          href="https://wa.me/56964857043"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Agendar por WhatsApp
        </a>
      </section>
    </main>
  );
}
