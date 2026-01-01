import foto12 from "../assets/foto12.jpeg";
import logo from "../assets/neurofamily.png";

export default function Home() {
  return (
    <>
      {/* HERO PEGADO AL NAVBAR */}
      <section className="hero-image">
        <img
          src={foto12}
          alt="Portada NeuroFamily"
          className="hero-img"
        />

        <div className="hero-content">
          <img
            src={logo}
            alt="NeuroFamily"
            className="hero-logo"
          />

          <p>
            Atención integral enfocada en mejorar la autonomía, funcionalidad
            y calidad de vida en niños, adultos y adultos mayores.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="home">

        {/* SERVICIOS */}
        <section className="therapy-section fade-in">
          <h2>¿En qué consisten nuestros servicios?</h2>

          <p className="therapy-intro">
            En <strong>NeuroFamily</strong> ofrecemos un acompañamiento terapéutico
            cercano y personalizado, orientado a potenciar el desarrollo,
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
                Se explican los resultados a evaluación y se orienta a la familia
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


        {/* NUEVA SECCIÓN – ¿POR QUÉ INICIAR TERAPIA? */}
        <section className="fade-in reason-section">
          <h2>¿Por qué iniciar un proceso terapéutico?</h2>

          <div className="reason-list">
            <div className="reason-item">
              <h3>Intervención oportuna y preventiva</h3>
              <p>
                Permitirá abordar las dificultades a tiempo, prevenir que se
                intensifiquen y favorecer mejores resultados en el desarrollo
                y aprendizaje del niño.
              </p>
            </div>

            <div className="reason-item">
              <h3>Mayor autonomía y bienestar</h3>
              <p>
                La terapia ayuda al niño a adquirir habilidades para participar
                de forma más independiente en el hogar, el colegio y su entorno
                social, fortaleciendo su autoestima.
              </p>
            </div>

            <div className="reason-item">
              <h3>Acompañamiento y orientación familiar</h3>
              <p>
                La familia recibirá apoyo profesional y estrategias prácticas
                para comprender y acompañar el proceso de su hijo de manera
                activa y segura.
              </p>
            </div>
          </div>
        </section>


        {/* CTA FINAL */}
        <section className="fade-in final-cta" style={{ textAlign: "center" }}>
          <h2>¿Tienes dudas sobre el desarrollo de tu hijo?</h2>

          <p>
            Si notas dificultades o simplemente quieres orientación profesional,
            no es necesario esperar. Un acompañamiento oportuno puede marcar una
            gran diferencia.
          </p>

          <a
            href="https://wa.me/56976683388?text=Hola,%20quiero%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            👉 Agenda una sesión
          </a>

          <p style={{ marginTop: "16px" }}>
            Estamos aquí para acompañarte a ti y a tu hijo en cada etapa de su desarrollo.
          </p>
        </section>

      </main>
    </>
  );
}
