import "../Styles/Skills.css";
import java_logo from "../Assets/Skills/java.png";
import jee from "../Assets/Skills/jee.png";
import spring from "../Assets/Skills/spring.png";
import html from "../Assets/Skills/html.webp";
import css from "../Assets/Skills/css.png";
import javascript from "../Assets/Skills/javascript.png";
import springsecurity from "../Assets/Skills/spring-security.svg";
import springdata from "../Assets/Skills/spring-data.svg";
import springboot from "../Assets/Skills/spring-boot.png";
import react from "../Assets/Skills/react.png";
import cplus from "../Assets/Skills/c++.png";
import python from "../Assets/Skills/py.png";
import csharp from "../Assets/Skills/csharp.png";
import bootstrap from "../Assets/Skills/bootstrap.png";
import c from "../Assets/Skills/c.png";
import php from "../Assets/Skills/php.png";
import flask from "../Assets/Skills/flask.png";
import mysql from "../Assets/Skills/mysql.png";
import maria from "../Assets/Skills/maria.png";
import sqlserver from "../Assets/Skills/sqlserver.png";
import hibernate from "../Assets/Skills/hibernate.svg";
import postman from "../Assets/Skills/postman.png";
import jupyternotebook from "../Assets/Skills/jupyter-notebook.png";
import vscode from "../Assets/Skills/vscode.png";
import maven from "../Assets/Skills/maven.png";
import linux from "../Assets/Skills/linux.png";
import git from "../Assets/Skills/git.png";
import github from "../Assets/Skills/github.png";
import tailwindcss from "../Assets/Skills/tailwindcss.png";
import keras from "../Assets/Skills/keras.png";
import tensorflow from "../Assets/Skills/tensorflow.png";
import scikitlearn from "../Assets/Skills/scikit-learn.png";
import qt from "../Assets/Skills/qt.png";

function Skills() {
    const tools = [
        { name: "Java", logo: java_logo },
        { name: "JEE", logo: jee },
        { name: "Spring", logo: spring },
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JavaScript", logo: javascript },
        { name: "Spring Boot", logo: springboot },
        { name: "Spring Data", logo: springdata },
        { name: "Spring Security", logo: springsecurity },
        { name: "React", logo: react },
        { name: "C++", logo: cplus },
        { name: "Python", logo: python },
        { name: "C#", logo: csharp },
        { name: "Bootstrap", logo: bootstrap },
        { name: "C", logo: c },
        { name: "PHP", logo: php },
        { name: "Flask", logo: flask }, 
        { name: "MySql", logo: mysql },
        { name: "MariaDB", logo: maria },
        { name: "Micrsoft Sql Server", logo: sqlserver },
        { name: "Hibernate", logo: hibernate },
        { name: "Postman", logo: postman },
        { name: "Jupyter Notebook", logo: jupyternotebook },
        { name: "VS. Code", logo: vscode },
        { name: "Maven", logo: maven },
        { name: "Linux", logo: linux },
        { name: "Git", logo: git },
        { name: "GitHub", logo: github },
        { name: "Tailwindcss", logo: tailwindcss },
        { name: "Keras", logo: keras },
        { name: "TensorFlow", logo: tensorflow },
        { name: "Scikit Learn", logo: scikitlearn },
        { name: "Qt", logo: qt },
    ];

    return (
        <div id="Skills" className="main_Container_skills">
            <div className="avant-skills"></div>
            <div className=" box Skill">Skills</div>
            <section className="box selection">
                <div className="pl">Programming Languages</div>
                <div>Machine Learning and AI</div>
                <div>Front-End</div>
                <div>Back-End</div>
                <div>Frameworks</div>
            
            </section>

            <section className="skills">
                <div className=" box skills-container">
                    {tools.map((tool, index) => (
                        <div className="skill-card box " key={index}>
                            <div className="logo-container">
                                <img src={tool.logo} alt={`${tool.name} logo`} className="logo_skill" />
                            </div>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;
