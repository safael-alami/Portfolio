import "../Styles/Fasel.css";
import React from "react";

function Fasel() {
  // Génération aléatoire des étoiles
  const stars = Array.from({ length: 100 }, (_, i) => {
    const left = Math.random() * 100 + "vw";
    const top = Math.random() * 100 + "vh";
    const size = Math.random() * 3 + 1 + "px";
    const duration = Math.random() * 5 + 2 + "s";

    return (
      <div
        key={i}
        className="star1"
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

  return (
    <section className="staarr">
      <div className="starss">{stars}</div>
    </section>
  );
}

export default Fasel;
