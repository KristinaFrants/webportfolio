import React from 'react'
import LandingServicesCards from "./LandingServicesCards"
import "./LandingServices.css"


function LandingServices() {
    return (
        
        <div className="landinServices m-2">
            
        <h3 className="col mx-auto" style={{borderBottom: "3px solid black",  fontFamily: "Playfair Display, serif"}}>SKILLS DESCRIPTION</h3>
       

            <div className="landindServices__left mx-auto row">
            <br/>
                <p className=" mt-4 col-5" style={{textAlign: "left", fontFamily: "Playfair Display, serif"}}>
                <h4>Front-End Web Development</h4>
                I specialize in applications written in both <b>React and Python/Flask.</b><br>
                </br> My current experience and skills in front-end includes:
                <li>JavaScript development: Bootstrap, ReactJs, NodeJs, Flask </li>
                <li>HTML5/CSS3, SAAS, React Springs - Responsive design </li>
                <li>Indesign, Photoshop, Wordpress</li>

                <br/>
                <br/>
                <p className=" mt-4" style={{textAlign: "left", fontFamily: "Playfair Display, serif"}}>
                <h4>Back-End Web Development</h4>
                My current stack involves <b>NodeJs, Python/Flask, MySQL, SQLAlchemy ect.</b><br>
                </br> What I can do for you at that side is:
                <li>Python development: Bootstrap, Flask, NodeJs, Blueprints </li>
                <li>RESTful APIs and API integrations: Twillio, Google, Payments</li>
                <li>SQL Databases: MySQL, PostgreSQL, SQLAlchemy, Firebase, Heroku</li>
                <li>Code testing: Postman, Insomnia</li>
                </p>
                </p>



            <div className="landingServices__right col mb-4"> 
            <div className="row_landingServices__right">
                <div className="col_landingServices__right">
                <img src="https://img.freepik.com/premium-vector/laptop-with-code-screen-programming-code-computer-fixing-bugs-coding-programing-web-page-template-writing-app-code-testing-computer-software-remote-work-software-development_435184-992.jpg?size=626&ext=jpg&ga=GA1.2.68384654.1670192340&semt=sph" style={{width:"100%"}}/>
                <img src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg?w=740&t=st=1675965810~exp=1675966410~hmac=afbee77e305dbefab6d679806eb36ccf2e657fcfcda5153a21dabd03eb61546f" style={{width:"100%"}}/>
                </div>

                <div className="col_landingServices__right">
                <img src="https://img.freepik.com/free-vector/ui-ux-app-development-concept_52683-48848.jpg?size=626&ext=jpg&ga=GA1.2.68384654.1670192340&semt=sph" style={{width:"100%"}}/>
                <img src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-250.jpg?size=626&ext=jpg&ga=GA1.2.68384654.1670192340&semt=sph" style={{width:"100%"}}/>
                <img src="https://img.freepik.com/free-vector/mobile-application-development-programming-languages-css-html-it-ui-male-programmer-cartoon-character-developing-website-coding_335657-2367.jpg?size=338&ext=jpg&ga=GA1.1.68384654.1670192340&semt=sph" style={{width:"100%"}}/>
                </div>

                </div>
            </div>
            </div>
            
                <LandingServicesCards/>
            </div>

    )
}

export default LandingServices
