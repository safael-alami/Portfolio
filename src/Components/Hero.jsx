import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import Lottie from "react-lottie-player";
import animationData from "../Assets/Videos/Animation.json";
import plane from "../Assets/Images/airplane.png";
import telecharger from "../Assets/Images/telecharger.png";
import linkedin from "../Assets/Images/logo-linkedin.png";
import email from "../Assets/Images/email.png";
import appel from "../Assets/Images/appel.png";
import github from "../Assets/Images/git-logo.png";
import github_mauve from "../Assets/Images/github mauve.png";
import medium from "../Assets/Images/Medium-logo.png";
import medium_mauve from "../Assets/Images/medium mauve.png";
import cv_fr from "../Assets/cv/safa EL-ALAMI cv.pdf";
import cv_eng from "../Assets/cv/safa EL-ALAMI Resume.pdf";


function Hero() {
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [language, setLanguage] = useState('fr'); // 'fr' for French and 'en' for English

  const [showModal, setShowModal] = useState(false); // Contrôle de la modal

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDeveloper((prev) => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  // Génération aléatoire des étoiles
  const stars = Array.from({ length: 100 }, (_, i) => {
    const left = Math.random() * 100 + "vw";
    const top = Math.random() * 100 + "vh";
    const size = Math.random() * 3 + 1 + "px";
    const duration = Math.random() * 5 + 2 + "s";

    return (
      <div
        key={i}
        className="star"
        style={{
          left,
          top,
          width: size,
          height: size,
          animationDuration: duration,
        }}
      ></div>
    );
  });




const handleDownload = (languageChoice) => {
 
  const fileName = languageChoice === 'fr' ? 'Safa EL-ALAMI cv.pdf' : 'Safa EL-ALAMI Resume.pdf';
  const filePath = languageChoice === 'fr' 
  ? {cv_fr}
  : {cv_eng}; 
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.click();
  setShowModal(false);
};


  return (
    <div id="hero" className="background_video">
      <div className="content">
        <div className="Intro">
          <div className="introduction">
            <div className="hi">Hey There, I'm
              <div className={`transition-text ${showDeveloper ? "visible" : "hidden"}`}>
                {showDeveloper ? "Software Engineering Student" : "Safa EL-ALAMI"}
              </div>
            </div>
          </div>

          <div className="introduction2">
            <div>
              I thrive on transforming ideas into innovation, where every challenge is a step towards creating something impactful.
            </div>
          </div>

          
          <div className="cv" onClick={() => setShowModal(true)}>
            <div className="download" >Download Resume (CV)</div>
            <img src={telecharger} alt="Download CV" />
          </div>

          {showModal && (
              <div className="modal">
                <div className="modal-content">
                  
                  <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
                  <h3>Select Language</h3>
                 
                  <button className="button" onClick={() => handleDownload('fr')}>Français</button>
                  <button className="button" onClick={() => handleDownload('en')}>English</button>
                </div>
              </div>
            )}



          <div className="links">
            <div className="others">
              <img src={linkedin} alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/safa-el-alami/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="others">
              <img src={email} alt="Email" />
              <a href="mailto:safaelalami971@gmail.com">Email</a>
            </div>
            <div className="others">
              <img src={appel} alt="Phone" />
              <a href="tel:+0033765227763">Phone</a>
            </div>
            <div className="gitt">
            <img  src={github_mauve} alt="GitHub" />
              <a href="https://github.com/safa-el-alami" target="_blank" rel="noreferrer"> Git</a>
            </div>

            <div className="gitt">
            <img  src={medium_mauve} alt="Medium" />
            <a href="https://medium.com/@safa-el-alami" target="_blank" rel="noreferrer"> Medium</a>
            </div>
          </div>

         


              
        
           
        
             
    
        </div>

        <div className="lottie-animation">
          <div className="stars">{stars}</div>
          <Lottie loop animationData={animationData} play />
        </div>
      </div>

      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>

      <div className="footer">
      </div>
    </div>
  );
}

export default Hero;
