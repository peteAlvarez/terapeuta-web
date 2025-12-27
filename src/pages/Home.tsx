export default function Home() {
  return (
    <main className="home">
      {/* HERO (NO SE TOCA) */}
      <section className="hero fade-in">
        <h2>Neuro Family</h2>

        <p>
          Atención integral enfocada en mejorar la autonomía, funcionalidad
          y calidad de vida en niños, adultos y adultos mayores.
        </p>
      </section>


      {/* SECCIÓN – ¿EN QUÉ CONSISTE UNA TERAPIA OCUPACIONAL? */}
      <section className="therapy-section fade-in">
        <h2>¿En qué consiste una Terapia Ocupacional?</h2>

        <p className="therapy-intro">
          En <strong>NeuroFamily</strong> ofrecemos un acompañamiento terapéutico
          estructurado, cercano y personalizado, orientado a potenciar el desarrollo,
          la autonomía y el bienestar del niño y su familia.
        </p>

        <div className="therapy-grid">
          <div className="therapy-card">
            <h3>1. Evaluación inicial</h3>
            <p>
              Se realiza una evaluación integral del niño o niña, considerando su
              desarrollo, habilidades, dificultades y contexto familiar.
            </p>
          </div>

          <div className="therapy-card">
            <h3>2. Entrevista con la familia</h3>
            <p>
              Se conversa con padres o cuidadores para conocer sus inquietudes,
              objetivos y necesidades, promoviendo un trabajo colaborativo.
            </p>
          </div>

          <div className="therapy-card">
            <h3>3. Entrega de información</h3>
            <p>
              Se explican los resultados de la evaluación y se orienta a la familia
              sobre el proceso terapéutico y estrategias de apoyo en el hogar.
            </p>
          </div>

          <div className="therapy-card">
            <h3>4. Plan de intervención</h3>
            <p>
              Se diseña un plan terapéutico personalizado, con objetivos claros y
              acordes a las necesidades del niño y su entorno.
            </p>
          </div>

          <div className="therapy-card">
            <h3>5. Acompañamiento continuo</h3>
            <p>
              Se realiza seguimiento permanente, ajustando el plan según los avances
              y promoviendo la participación activa de la familia.
            </p>
          </div>
        </div>
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
        <a
          href="https://wa.me/56976683388?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <span>Contactar por WhatsApp</span>
        </a>

      </section>
    </main>
  );
}
