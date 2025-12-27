import { useEffect, useRef } from "react";
import lorenaImg from "../assets/lorena.jpg";
import logo from "../assets/logo.jpeg";
import video from "../assets/video.mp4";

export default function About() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        entry.isIntersecting
          ? videoRef.current.play()
          : videoRef.current.pause();
      },
      { threshold: 0.6 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-in">
      <h2>Quiénes Somos</h2>

      {/* LOGO CENTRADO */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logo}
          alt="Logo Neuro Family"
          className="about-logo"
               />
      </div>

      {/* TEXTO EMPRESA */}
      <p className="about-intro">
        <strong>NeuroFamily</strong> es una marca dedicada a la rehabilitación infantil
        a domicilio, enfocada en entregar una atención cercana, humana y de alta
        calidad, acompañando tanto a niños y niñas como a sus familias a lo largo de
        cada etapa de su desarrollo.
      </p>

      <p>
        A través de intervenciones personalizadas y basadas en evidencia, NeuroFamily
        busca potenciar las habilidades funcionales, la autonomía y el bienestar
        integral de cada niño o niña, respetando sus ritmos, necesidades e intereses
        individuales.
      </p>

      <p>
        Creemos en el trabajo colaborativo con las familias y el entorno, promoviendo
        la inclusión, la participación activa y la creación de espacios significativos
        que favorezcan el desarrollo y la calidad de vida en el día a día.
      </p>


      {/* FOTO LORENA */}
      <img
        src={lorenaImg}
        alt="Lorena Gonzalez - Terapeuta Ocupacional"
        className="profile-image"
        width={320}
        height={320}
        loading="lazy"
        decoding="async"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />

      <h3>Directora</h3>
      <p>
        <strong>Lorena Gonzalez</strong>, Terapeuta Ocupacional titulada, lidera
        NeuroFamily con un enfoque humano y profesional, orientado al acompañamiento
        integral de niños y sus familias.
      </p>

      {/* VIDEO */}
      <div className="about-video">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          preload="metadata"
          className="video-interactive"
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

      {/* TARJETAS */}
      <div className="grid">
        <div className="card">
          <h3>Formación</h3>
          <p>
            Terapeuta Ocupacional titulada, con formación continua en integración
            sensorial y rehabilitación funcional.
          </p>
        </div>

        <div className="card">
          <h3>Experiencia</h3>
          <p>
            Experiencia clínica y comunitaria trabajando con familias e
            instituciones educativas.
          </p>
        </div>

        <div className="card">
          <h3>Enfoque Profesional</h3>
          <p>
            Atención centrada en la persona, basada en evidencia científica y
            orientada al bienestar integral.
          </p>
        </div>
      </div>
    </section>
  );
}
