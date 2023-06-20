import Navigation from "./components/Navigation";

import styles from "./style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Service from "./components/Service"
import About from "./components/About";
import Contact from "./components/Contact"
import Projects from "./components/Projects";
// import Animatecursor from "./components/Animatecursor";
import Home from "./components/Home";


const App = () => {
  // states
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`bg-primary  flex-col flex overflow-x-hidden`}>
       {/* <Animatecursor/>  */}

      <div className={`${styles.boxWidth}`}>
        <Navigation toggle={toggle} setToggle={setToggle} />
      </div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="service" element = {<Service/>} />
          <Route path="aboutus" element = {<About/>} />
          <Route path="contact" element = {<Contact/>} />
     <Route path="projects" element = {<Projects/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
};

export default App;

