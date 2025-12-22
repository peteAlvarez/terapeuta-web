export default function Home() {
  return (
    <main className="home">
      <section className="hero fade-in">
        <h2>Terapia Ocupacional</h2>

        <p>
          Atención integral enfocada en mejorar la autonomía, funcionalidad
          y calidad de vida en niños, adultos y adultos mayores.
        </p>
      </section>

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
    </main>
  );
}
