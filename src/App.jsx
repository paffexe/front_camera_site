import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Capabilities/Features";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
