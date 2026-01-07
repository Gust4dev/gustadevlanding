import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "./routes/Home";
import { TemplatePage } from "./routes/TemplatePage";
import { BlogPage } from "./routes/BlogPage";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovered ? 2.5 : 1,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        <div className="noise-bg" />
        <CustomCursor />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template/:slug" element={<TemplatePage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
