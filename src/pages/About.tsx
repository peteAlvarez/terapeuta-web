import { useEffect, useRef } from "react";
import lorenaImg from "../assets/lorena.jpg";
import video from "../assets/video.mp4";

export default function About() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay del video al bajar
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-in">
      <h2>¿Quiénes Somos?</h2>

      {/* Imagen principal */}
      <img
        src={lorenaImg}
        alt="Lorena Gonzalez - Terapeuta Ocupacional"
        className="profile-image"
        width={320}
        height={320}
        loading="lazy"
        decoding="async"
        title="Lorena Gonzalez - Terapeuta Ocupacional"
        aria-label="Foto de Lorena Gonzales, terapeuta ocupacional"
        role="img"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />

      {/* Quiénes somos - NeuroFamily */}
      <p>
        <strong>NeuroFamily</strong> es una marca emergente dedicada a ofrecer
        servicios de rehabilitación infantil a domicilio, orientada a brindar una
        atención cercana, humana y de alta calidad.
      </p>

      <p>
        Nuestro objetivo es acompañar a niños, niñas y sus familias, entregando
        herramientas prácticas y terapéuticas que favorezcan su desarrollo,
        autonomía y bienestar en el día a día, respetando siempre las necesidades
        individuales de cada persona.
      </p>

      <p>
        Creemos firmemente que la inclusión es posible y que, trabajando de manera
        colaborativa con las familias y el entorno, podemos construir espacios más
        accesibles, respetuosos y significativos para todas y todos.
      </p>

      {/* Sobre Lorena */}
      <p>
        <strong>Lorena Gonzalez</strong> es Terapeuta Ocupacional titulada, con una
        vocación profundamente orientada al acompañamiento integral de personas
        en distintas etapas de la vida. Su trabajo se basa en una atención
        empática, profesional y centrada en las necesidades individuales de cada
        paciente.
      </p>

      <p>
        Posee experiencia en la intervención con niños, adolescentes, adultos y
        personas mayores, abordando dificultades del desarrollo, procesos de
        rehabilitación, estimulación cognitiva, autonomía funcional y calidad de
        vida.
      </p>

      <p>
        A lo largo de su trayectoria profesional, ha trabajado en contextos
        clínicos, educativos y comunitarios, diseñando planes terapéuticos
        personalizados que favorecen la participación activa de la persona y su
        entorno familiar.
      </p>

      {/* VIDEO */}
      <div className="about-video">
        <video
          ref={videoRef}
          id="aboutVideo"
          src={video}
          muted
          playsInline
          preload="metadata"
          className="video-interactive auto-video"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => videoRef.current?.pause()}
        >
          Tu navegador no soporta videos.
        </video>

        <button
          className="sound-btn"
          onClick={() => {
            if (!videoRef.current) return;
            videoRef.current.muted = false;
            videoRef.current.volume = 1;
            videoRef.current.play();
          }}
        >
          🔊 Activar sonido
        </button>
      </div>

      {/* Tarjetas informativas */}
      <div className="grid">
        <div className="card">
          <h3>Formación</h3>
          <p>
            Terapeuta Ocupacional titulada, con formación continua en integración
            sensorial, estimulación temprana, salud mental y rehabilitación
            funcional.
          </p>
        </div>

        <div className="card">
          <h3>Experiencia</h3>
          <p>
            Más de 5 años de experiencia clínica y comunitaria, trabajando con
            familias, instituciones educativas y centros de atención
            especializada.
          </p>
        </div>

        <div className="card">
          <h3>Enfoque Profesional</h3>
          <p>
            Atención centrada en la persona, basada en evidencia científica,
            promoviendo la autonomía, la inclusión y el bienestar integral.
          </p>
        </div>
      </div>

      {/* Cierre */}
      <p style={{ marginTop: "40px" }}>
        El compromiso de Lorena Gonzalez y NeuroFamily es entregar un
        acompañamiento terapéutico respetuoso y efectivo, orientado a potenciar
        las habilidades necesarias para una vida plena y significativa.
      </p>
    </section>
  );
}
