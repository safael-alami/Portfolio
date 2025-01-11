import "../Styles/Projects.css"
import ocp from "../Assets/Images/image.png"
import examapplication from "../Assets/Images/exam_application.png";
import music from "../Assets/Images/music_recommendation.png";
import projet_java from "../Assets/Images/projet_java.jpeg";
import image_search from "../Assets/Images/image_search.jpeg";

import recipeapp from "../Assets/Images/recipeapp.png";

function Projects(){
    return (
        <div id="Projects"className="main_container_projects">

            <div className="avant-projects"></div>

            <div className="projects">
                <section className="exposition_avant">
                <div className=" box titre">Projects</div>


                <div className=" box project1">
                        <img src={projet_java} className="image_projet" alt="Medical Cabinet Management" />
                        
                        <div className="titlecard">
                            Medical Office Management
                        </div>

                            <div className="tools">
                                <div className="badge badge-green">
                                    <i className="fa-brands fa-java"></i> 
                                    <span>Java</span>
                                </div>
                                <div className="badge badge-blue">
                                    <i className="fa-brands fa-java"></i> 
                                    <span>JavaFX</span>
                                </div>
                                <div className="badge badge-red">
                                    <i className="fa-solid fa-database"></i> 
                                    <span>MySQL</span>
                                </div>
                            </div>
                            
                            <div className="ligne"></div>
                            
                            <div className="decription">
                                Developed a graphic interface application to streamline the management of a medical practice, reducing administrative time and improving overall efficiency. The system automates patient scheduling, medical record management, and staff coordination, all through an intuitive GUI. Role-based access is provided to medical staff and administrators, ensuring secure and efficient management of the practice.
                            </div>
                        </div>

                        <div className=" box project1">
                            <img src={image_search} className="image_projet" alt="Image Search Application" />
                            
                            <div className="titlecard">
                                Image Search Application
                            </div>
                            
                            <div className="tools">
                                <div className="badge badge-green">
                                    <i className="fa-brands fa-python"></i> 
                                    <span>Python</span>
                                </div>
                                <div className="badge badge-blue">
                                    <i className="fa-brands fa-flask"></i> 
                                    <span>Flask</span>
                                </div>
                                <div className="badge badge-red">
                                    <i className="fa-solid fa-database"></i> 
                                    <span>ImageNet</span>
                                </div>
                                <div className="badge badge-lightgreen">
                                    <i className="fa-solid fa-code"></i> 
                                    <span>HTML/CSS</span>
                                </div>
                            </div>
                            
                            <div className="ligne"></div>
                            
                            <div className="decription">
                                Developed an image search application that uses a pre-trained ResNet50 model to find and recommend similar images based on a user-uploaded image. The application is built using Python and Flask, with a user-friendly web interface created using HTML and CSS. The system leverages ResNet50 to extract features and calculate image similarity for recommendations.
                            </div>
                        </div>


                        



                </section>

                



                <section className="exposition">

                <div className="box project1">
                        <img src={examapplication} className="image_projet" alt="OCP Project" />
                        
                        <div className="titlecard">
                            Exam Management at ENSAH
                        </div>
                        
                        <div className="tools">
                        <div className="badge badge-green">
                            <i className="fa-brands fa-java"></i> 
                            <span>Java</span>
                        </div>
                        <div className="badge badge-blue">
                        <i className="fa-brands fa-java"></i> 
                            <span>Spring Boot</span>
                        </div>
                        <div className="badge badge-red">
                            <i className="fa-solid fa-database"></i> 
                            <span>Spring Data JPA</span>
                        </div>
                        <div className="badge badge-lightgreen">
                            <i className="fa-solid fa-code"></i> 
                            <span>Thymeleaf</span>
                        </div>
                    </div>


                
                <div className="ligne"></div>
                
                <div className="decription">
                    Developed an application to streamline the scheduling and management of exams, reducing scheduling time by 50% and enhancing overall efficiency. The system automated conflict-free scheduling and improved accuracy, with role-based access granted solely to administrators to manage and oversee the exam process, ensuring a seamless and secure user experience.
                                                         </div>
                </div>

                <div className="box project1">
               
                            <img src={music} className="image_projet" alt="Music Recommendation System" />
                            
                            <div className="titlecard">
                                Music Recommendation System
                            </div>
                            
                            <div className="tools">
                                <div className="badge badge-red">
                                    <i className="fa-solid fa-database"></i> 
                                    <span>Spotify Data</span>
                                </div>
                                <div className="badge badge-lightgreen">
                                    <i className="fa-solid fa-code"></i> 
                                    <span>Python</span>
                                </div>
                                <div className="badge badge-blue">
                                    <i className="fa-brands fa-html5"></i>
                                    <span>HTML</span>
                                </div>
                                <div className="badge badge-lightblue">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <span>CSS</span>
                                </div>
                                <div className="badge badge-dark">
                                    <i className="fa-brands fa-python"></i>
                                    <span>Flask</span>
                                </div>
                            </div>

                            <div className="ligne"></div>
                            
                            <div className="decription">
                                Developed a Music Recommendation System using machine learning (SVM with RBF kernel) to predict and suggest personalized music based on user preferences. The system was trained using Spotify data from Kaggle, and deployed with Python and Flask. HTML and CSS were used to build the web interface and display the recommendations in an interactive and user-friendly manner.
                            </div>
                        </div>

                        <div className="box project1">
    <img src={recipeapp} className="image_projet" alt="Recipe Management System" />
    
    <div className="titlecard">
        Recipe Management System
    </div>
    
    <div className="tools">
        <div className="badge badge-green">
            <i className="fa-brands fa-csharp"></i>
            <span>C#</span>
        </div>
        <div className="badge badge-dark">
            <i className="fa-solid fa-database"></i>
            <span>Entity Framework</span>
        </div>
        <div className="badge badge-lightgreen">
            <i className="fa-solid fa-code"></i>
            <span>GUI</span>
        </div>
    </div>
    
    <div className="ligne"></div>
    
    <div className="decription">
        Developed a Recipe Management System that displays recipes from an external API on the main page. Users can view a variety of recipes and also have the ability to write their own recipes and create shopping lists. The application features a graphical user interface (GUI) for an interactive and user-friendly experience. Built using C# and Entity Framework, the system stores user data and recipes in a database, enabling easy access and management of recipes and shopping lists.
    </div>
</div>




                </section>

            </div>

            

        </div>
    );
}

export default Projects;