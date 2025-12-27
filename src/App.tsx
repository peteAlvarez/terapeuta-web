import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const isProd = import.meta.env.PROD;

/* 🔹 Scroll arriba al cambiar de página */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

/* 🔹 Router dinámico */
const Router = isProd ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
