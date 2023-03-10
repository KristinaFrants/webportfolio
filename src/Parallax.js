
import React from "react";
import { Parallax} from "react-parallax";
import { Link } from 'react-router-dom'


const insideStyles = {

  padding: 20,
  position: "absolute",
  top: "45%",
  left: "35%",
  transform: "translate(-50%,-50%)"
};



const image1 =
  "https://img.freepik.com/premium-vector/application-pc-phone-with-business-graph-analytics-data_76964-144.jpg?size=626&ext=jpg&ga=GA1.2.68384654.1670192340&semt=sph";


const ParallaxContainer = () => (
  
  <div style={{width:'100%',marginBottom:"10%",opacity: "2"
  }}>
    <Parallax bgImage={image1} strength={250} >
    <div style={{ height: '500px', borderRadius: "5px",}} />
     
        <div style={insideStyles}>
        <h1 className="Welcome" style={{fontSize: "75px", color:"rgba(255, 255, 255, 0.788)", borderBottom:"2px solid rgba(247, 247, 247, 0.418)"}}>Welcome
        </h1><br></br>
        <h4 className="Welcome" style={{color:"rgba(255, 255, 255)"}}>I am a FullStack WebDeveloper with background in SEO specializing in building exceptional digital experiences. </h4><br></br>
        <h5 className="Welcome" style={{color:"rgba(255, 255, 255)", marginBottom:"25px"}}>I love to build things from scratch, keep up with AI and look for existance answers in metaphysics.</h5><br></br>
        <a href="https://www.linkedin.com/in/cristina-chiticari-fullstack/" className="Linkein" >LinkedIn</a>
        </div>
     
    </Parallax>
  </div>
);
export default ParallaxContainer

