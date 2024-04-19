import { useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Work from "./components/Work";
import Collaboration from "./components/Collaboration";

function App() {
  const container = useRef();
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
      el: container.current,
    });
  }, [container]);

  return (
    <div ref={container} className="main overflow-hidden">
      <Header />
      <Home />
      <About />
      <Work />
      <Collaboration/>
    </div>
  );
}

export default App;
