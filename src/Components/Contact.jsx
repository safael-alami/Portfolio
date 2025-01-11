import React, { useState } from "react";
import emailjs from "emailjs-com";  // Importer EmailJS
import "../Styles/Contact.css";

function Contact() {

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
  
  // State pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fonction pour envoyer l'email
  const sendEmail = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Utiliser EmailJS pour envoyer l'email
    emailjs
      .sendForm(
        "service_kzrdque", // Remplacez par votre ID de service EmailJS
        "template_49r9ahh", // Remplacez par votre ID de modèle EmailJS
        e.target,
        "KDETe2ZiWM-EnPwDg" // Remplacez par votre ID utilisateur EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès!");

          // Réinitialiser le formulaire après l'envoi
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <section id="Contact" className="main_container_contact">
      <section className="staarr">
      <div className="starss">{stars}
          
        </div>

      
        <div className="avant-contact"></div>

        <div className="box contact">Contact Me</div>

        <section className=" box section_contact">
          <form className=" box contact-form" onSubmit={sendEmail}>
          <h1>Ready to Discuss? Don't Hesitate, Let's Connect!</h1>

            <input
              type="text"
              name="name" // Ce nom doit correspondre à celui dans le modèle
              placeholder="Nom"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email" // Correspond à l'email de l'utilisateur
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject" // Correspond au sujet du message
              placeholder="Objet"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message" // Correspond au corps du message
              placeholder="Votre message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="form-button">
              Envoyer
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default Contact;
