
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
  "https://img.freepik.com/free-vector/vibrant-bokeh-lights-banner-with-text-space_1017-33335.jpg?w=826&t=st=1675109953~exp=1675110553~hmac=afbe1487d51ea9b4b12b722d5a411c31483670526ade46243daf4cbdd41e0b30";


const ParallaxContainer = () => (
  
  <div style={{width:'100%',marginBottom:"10%",opacity: "2"
  }}>
    <Parallax bgImage={image1} strength={250} >
    <div style={{ height: '500px', borderRadius: "5px",}} />
     
        <div style={insideStyles}>
        <h1 style={{fontSize: "75px", color:"rgba(255, 255, 255, 0.788)", borderBottom:"2px solid rgba(247, 247, 247, 0.418)"}}>Welcome</h1><br></br>
        <h4 style={{color:"rgba(255, 255, 255)"}}>I am a FullStack WebDeveloper with background in SEO Marketing specializing in building exceptional digital experiences. </h4><br></br>
        <h5 style={{color:"rgba(255, 255, 255)", marginBottom:"25px"}}>I love to build things from scratch, keep up with AI and look for existance answers in metaphysics.</h5><br></br>
        <Link className="Linkein" to="https://www.linkedin.com/in/cristina-chiticari-fullstack/">LinkedIn</Link>
        </div>
     
    </Parallax>
  </div>
);
export default ParallaxContainer

