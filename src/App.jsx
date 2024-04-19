import { useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Work from "./components/Work";
import Collaboration from "./components/Collaboration";
import SLider from "./components/SLider";
import MyLoader from "./components/MyLoader";

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
      <MyLoader/>
      <Header />
      <Home />
      <About />
      <Work />
      <Collaboration />
      <SLider />
    </div>
  );
}

export default App;
