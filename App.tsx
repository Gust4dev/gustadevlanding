import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { TemplatePage } from "./routes/TemplatePage";
import { BlogPage } from "./routes/BlogPage";

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
