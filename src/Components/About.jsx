import React, { useState, useEffect, useRef } from "react";
import "../Styles/About.css";
import me from "../Assets/Images/profil.jpg";

function About() {
  const hoverEffectRef = useRef(null);

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    if (hoverEffectRef.current) {
      hoverEffectRef.current.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
      hoverEffectRef.current.style.display = "block";
     
    }
  };



  const handleMouseLeave = () => {
    if (hoverEffectRef.current) {
      hoverEffectRef.current.style.display = "none";
    }
  };



  const boxes = document.getElementsByClassName("box");

  const checkScroll = () => {
   
    Array.from(boxes).forEach((box) => {
      const boxPosition = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
     
      if (boxPosition < windowHeight - 100) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  };
  
 
  window.addEventListener("scroll", checkScroll);
  
  
  checkScroll();
  
  


  return (
    <div id="About" className="about-section">
      <section className="Photo_container">
        <div className="about">
          <div className="title box">
            About<span>Me</span>
          </div>
        </div>
        <div className="image box">
          <div
            className="hover_section "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover_effect" ref={hoverEffectRef}></div>
            <img src={me} alt="me" />
          </div>
          
        </div>
        <div className="ligne-deco"></div>
      </section>

      <section className="presentation">
        <div className="welcome_presentation box">
          A Lifelong Curiosity: From Childhood Wonder to Computer Science
        </div>
        <div className="box">
          <span className="tohide"> espa </span> Since I was a child, I have
          always been captivated by the world around me, driven by an
          insatiable curiosity to uncover its mysteries. One vivid memory from
          my childhood involves my grandfather, who was an almond seller. He
          owned several almond trees, and every harvest season, the almonds
          would be brought home in large, sturdy sacks. As a little child, I
          was endlessly curious about what lay inside those sacks. I would
          often make a small hole in one of them, just to sneak a peek and grab
          an almond or two.
        </div>
        <span className="tohide"> espa </span>
        <div className="box">
          <span className="tohide"> espa </span> It might seem like a simple,
          playful act, but for me, it was always about answering the question,
          <strong className="toColor"> "What’s inside?" </strong>This relentless
          curiosity has defined my entire life. I’ve always loved discovering,
          learning, and exploring the unknown. And I know this drive to
          discover and learn will never fade—{" "}
          <strong className="toColor">
            it’s simply how I live and thrive.
          </strong>
        </div>
        <span className="tohide"> espa </span>
        <div className="box">
          <span className="tohide"> espa </span> This passion now fuels my
          journey as a <strong className="toColor">computer science student</strong>
          . In this field, I’ve found the perfect outlet for my curiosity—a
          space where I can explore complex systems, solve challenging
          problems, and create innovative solutions. Just as I once sought to
          uncover the secrets inside those sacks of almonds, I now strive to
          understand the intricate mechanisms behind technology, constantly
          learning and pushing boundaries.
        </div>
      </section>
    </div>
  );
}

export default About;
