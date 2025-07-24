import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
const MoveCursor = lazy(() => import("./components/MoveCursor/MoveCursor.jsx"));
const Header = lazy(() => import("./components/Header/Header.jsx"));
const Modes = lazy(() => import("./components/Modes/Modes.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const Error = lazy(() => import("./components/Error/Error.jsx"));
const Animation = lazy(() => import("./components/Animation/Animation.jsx"));

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <Suspense fallback={<Animation />}>
        <ThemeProvider>
          <MoveCursor />
          <Header />
          <Modes />
          <Routes>
            <Route exact="true" path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-portfolio" element={<Portfolio />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </StrictMode>
  </Router>
);

// https://preview.themeforest.net/item/tunis-tailwind-css-personal-portfolio-react-nextjs-template/full_screen_preview/50399681?_ga=2.63593455.1379085239.1725959906-265259131.1725959906

// https://awesome-loaders.netlify.app/docs/getting-started/
