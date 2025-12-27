import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container footer-center">

        {/* LOGO + MARCA */}
        <div className="footer-brand">
          <h3>Neuro Family</h3>
          <p>Centro de Terapia Ocupacional</p>
        </div>

        {/* INFO */}
        <div className="footer-info">
          <p>Atención profesional y personalizada</p>
          <p>© 2025 · Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}
