import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";

function App() {
  useEffect(() => {
    document.title = "Gideon - My Portfolio";
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
