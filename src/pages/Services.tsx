import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpeg";
import foto6 from "../assets/foto6.jpeg";
import foto7 from "../assets/foto7.jpeg";
import foto8 from "../assets/foto8.jpeg";
import foto9 from "../assets/foto9.jpeg";
import foto10 from "../assets/foto10.jpeg";
import foto11 from "../assets/foto11.jpeg";

import fono from "../assets/fono.jpeg";
import teo from "../assets/teo.jpeg";
import psico from "../assets/psico.jpeg";
import asis from "../assets/asis.jpeg";

export default function Services() {
  return (
    <section className="fade-in">
      <h2>Servicios</h2>

      {/* Cuadros superiores */}
      <div className="grid services-grid">

        <div className="card service-card">
          <img src={teo} alt="Terapia Ocupacional" className="service-img" />
          <h3>Terapia Ocupacional</h3>
          <p>
            Intervención terapéutica enfocada en el desarrollo de habilidades
            funcionales, autonomía, participación y desempeño ocupacional en
            niños, niñas y adolescentes.
          </p>
          <a
            href="https://wa.me/56976683388?text=Hola,%20quiero%20reservar%20una%20hora"
            target="_blank"
            rel="noopener noreferrer"
            className="service-btn"
          >
            Reserva tu hora
          </a>
        </div>

        <div className="card service-card">
          <img src={fono} alt="Fonoaudiología" className="service-img" />
          <h3>Fonoaudiología</h3>
          <p>
            Atención especializada en el desarrollo del lenguaje, comunicación,
            habla y alimentación, promoviendo una comunicación efectiva y
            significativa.
          </p>
          <a
            href="https://wa.me/56976683388?text=Hola,%20quiero%20reservar%20una%20hora"
            target="_blank"
            rel="noopener noreferrer"
            className="service-btn"
          >
            Reserva tu hora
          </a>
        </div>

        <div className="card service-card">
          <img src={psico} alt="Psicopedagogía" className="service-img" />
          <h3>Psicopedagogía</h3>
          <p>
            Apoyo educativo y acompañamiento en procesos de aprendizaje,
            considerando las necesidades individuales y el contexto escolar de
            cada niño o niña.
          </p>
          <a
            href="https://wa.me/56976683388?text=Hola,%20quiero%20reservar%20una%20hora"
            target="_blank"
            rel="noopener noreferrer"
            className="service-btn"
          >
            Reserva tu hora
          </a>
        </div>

        <div className="card service-card">
          <img src={asis} alt="Asistente Social" className="service-img" />
          <h3>Asistente Social</h3>
          <p>
            Acompañamiento psicosocial a niños y familias, orientado al acceso a
            redes de apoyo, fortalecimiento familiar y orientación social
            integral.
          </p>
          <a
            href="https://wa.me/56976683388?text=Hola,%20quiero%20reservar%20una%20hora"
            target="_blank"
            rel="noopener noreferrer"
            className="service-btn"
          >
            Reserva tu hora
          </a>
        </div>

      </div>

      {/* INFO EXTRA */}
      <div className="services-extra">
        <h3>Áreas de atención</h3>

        <ul className="services-list">
          <li>✨ Diagnósticos del neurodesarrollo: TDAH, CEA, conductual, IDD, SD</li>
          <li>🧠 Integración sensorial</li>
          <li>🏠 Sesiones a domicilio</li>
          <li>👶 Terapia Ocupacional infanto-juvenil</li>
          <li>🇨🇱 Atención en Santiago, Chile</li>
        </ul>

        <p style={{ marginTop: "24px" }}>
          Además, ampliamos nuestra cobertura para la tranquilidad y comodidad de
          nuestras familias, realizando atenciones en guarderías, jardines
          infantiles y programas after school, favoreciendo la continuidad
          terapéutica en los distintos entornos del niño o niña.
        </p>
      </div>

      {/* CARRUSEL */}
      <div className="carousel-container">
        <div className="carousel-track">
          {[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11].map(
            (img, index) => (
              <div className="carousel-slide" key={index}>
                <img src={img} alt={`Actividad terapéutica ${index + 1}`} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
