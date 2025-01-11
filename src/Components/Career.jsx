import React from "react";
import "../Styles/Career.css"
import eilco from "../Assets/Images/eilco.png";
import ensah from "../Assets/Images/ensah.png"




function Career(){
    return (

        
        <div id="Career" className="main_container_career">
            <div className="avant-career"></div>

        <div className=" box Career">

            Career

        </div>
            <section className=" box container" >

            
            
            <section className="same section1">
            <img src={ensah}></img>

                <div  className="name">Sed Bin EL Ouidane High School</div>

                <div className="desc">I studied at Bin El Ouidane High School and graduated with a specialization in Experimental Sciences, focusing on Physics and Chemistry.</div>

           
            </section>
            <section className="same section2">
            <img src={ensah}></img>
                
            
               <div className="name">National School of Applied Sciences- ENSAH</div>
               <div className="desc">I joined the National School of Applied Sciences of Al Hoceima (ENSAH), where I completed two years of integrated preparatory studies, followed by a specialization in Computer Engineering.</div>
            </section>
            <section className="same section3">
            <img src={eilco}></img>
            
            <div  className="name">The Coastal Opal Coast School of Engineering -EILCO</div> 
            <div className="desc">I am currently enrolled in a double-degree program in Computer Engineering through a partnership between ENSAH and the École d'Ingénieurs du Littoral-Côte-d'Opale (EILCO).</div>
            </section>
            


            </section>
            
        </div>




    );
}

export default Career;