
import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import style from "./App.module.css" ;
import About from "./Components/About";
import Career from "./Components/Career";
import Fasel from "./Components/fasel";
import Experience from "./Components/Experience";
import Skills from"./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App() {
  return (
<div className={style.Container}>
<Navbar/>
<Hero/>

<About/>

<Career/>

<Experience/>

<Skills/>

<Projects/>

<Contact/>

<Footer/>



</div>
 
  );

}

export default App;


