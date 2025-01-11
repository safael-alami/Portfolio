
import React from "react";
import "../Styles/Experience.css";
import ocp from "../Assets/Images/logo ocp.png";
import image from "../Assets/Images/image.png";
import image_2 from "../Assets/Images/image_2.png";
import ABOHER from "../Assets/Images/ABHOER_1.png";


function Exprerience(){

    return (
        <div id="Experience" className="Main_Container_experience">
            <div className="avant-experience"></div>

            <div className=" box experience">

                <div className="titre-experience">Experience</div>

            </div>
           

            <section className="section">
            <section className=" box section11">
            <div className="i_container">
            <i class="fa-solid fa-briefcase"></i>
            <span className="glowing-icon"></span>
           
            </div>
            <div className="gradient_ecriture">

           
            <div className="gradient-line "></div>
            <div className="ecriture">
            <img src={ocp} className="logo1"></img>
            <div>OCP | Full Stack Developper Intern</div>

            <div className="role">July 2024 - August 2024 | <span>Khouribga, Morocco </span> | On site</div>

            <section className="details">

            <div className="detail_stage">During my internship, I developed a secure application prototype to enhance intern management, incorporating user authentication and role-based access control. Designed for over 50 users, the application optimized management processes and ensured data security. I utilized technologies such as HTML, CSS, JavaScript, Java, Spring Boot, and Spring AI, delivering a comprehensive and reliable solution tailored to the organization’s needs.</div>
           


            <div class="ocp-image">
            <img src={image}></img>
            <a href="https://github.com/username/project" class="redirect-link" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            </div>

            

           
            


            </section>

            </div>

            </div>

            
            

               


            </section>
            <section className="section12">
            <div className="i_container">
            <i class="fa-solid fa-briefcase"></i>
            <span className="glowing-icon_2"></span>
            </div>

            <div class="gradient_ecriture">

           
            <div className="gradient-line_2 "></div>
            <div className="ecriture">
            <img src={ABOHER} className="logo2"></img>
            <div>ABHOER | Full Stack Developper Intern</div>
            <div className="role">July 2023 - August 2023 | <span>Beni Mellal, Morocco </span> | On site</div>

            <section className="details">

            <div className="detail_stage">During my internship, I co-developed a mail management prototype as part of a team, streamlining document processing and reducing request handling time by 30%. Designed for a team of 15 users, the project enhanced efficiency and collaboration. Technologies used included HTML, CSS, JavaScript, Java, Spring Boot, and Adobe Illustrator, showcasing effective teamwork and technical expertise.</div>
            

            
            <div class="ocp-image">
            <img src={image_2}></img>
            <a href="https://github.com/username/project" class="redirect-link" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            </div>

            </section>

            </div>
            </div>


            </section>




            </section>

            





        </div>

    );
}

export default Exprerience;