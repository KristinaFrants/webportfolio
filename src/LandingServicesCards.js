import React from 'react'
import './LandingServicesCards.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';

function LandingServicesCards() {
    return ( 
      <div className="m-0">
      
        <h3 className="col mx-auto" style={{borderBottom: "3px solid black"}}>WHAT DO I OFFER</h3>
        <div className="mt-4 ml-2 mr-2">
            <Row>
      <Col sm="3" >
        <Card  className="LandingCardServices__cards" body>
          <CardTitle tag="h4">Website Development</CardTitle>
          <CardText>Pexel perfect and functional design. I’m focusing on working on interface and 
            digital design – mainly building websides, branding and products.
          </CardText>
          <div class="flip_card_back">
        <h4 style={{marginTop:"2%"}}>Front & Back End</h4>
      <p> API Integration, MVP Development, Web Customization, Payment Integration, Cloud Integration, Web Deployment,
        DB Creation
      </p>
    </div>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h4">Responsive Design</CardTitle>
          <CardText>As a webdeveloper I'm trying to stay up to date with diferent design tools to create mostly MVP 
            WebApps and Landings.
          </CardText>
          <div class="flip_card_back">
        <h4 style={{marginTop:"2%"}}>CSS & HTML Layout</h4>
      <p> Bootstrap, React Springs, CMS Platforms, Canvas, Adobe Cloud, Gif/ScreenRecorder,
        Wordpress, Figma
      </p>
    </div>
          
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h4">SEO & SMM </CardTitle>
          <CardText>Complited a Meta Blueprint Course.
            Learned digital skills includung writing SEO optimized content with key words to boost selling compaing.
             </CardText>
             <div class="flip_card_back">
        <h4 style={{marginTop:"2%"}}>Schema.org & JSON</h4>
      <p> Meta Blueprint, SEO writing, Marketing Strategy Development, SMM, Google Business Card,
        Adds, eCommerce, B2C
      </p>
    </div>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h4">Agile Workflow</CardTitle>
          <CardText>Worked in Open plan spaces with Agile enviroment. Collabed with team to deliver
             continuous through small and frequent website releases.

          </CardText>
          <div class="flip_card_back">
        <h4 style={{marginTop:"2%"}}>Launching & Deployment </h4>
      <p> Jira, Asana, UI Planning, Google Sheets,
        Email Managing, Scrum, Bug Fixing, Self-Organizing
      </p>
    </div>
        </Card>
      </Col>
    </Row>
        </div>
        
        <div className="LandingServices__blob">
          
          <div className="row ">
<div className="col LandingServicesBlob__left">
  <h2>Development</h2>
  <p>Strong software engineering skills, excellent interpersonal communication, with experience to hand code standards compliant semantic XHTML, ReactJs websites. </p>
  <Link to="/home" className='LandingServicesBlob__leftLink'>
  <p>View projects </p>
  </Link>
</div>

<div className="col LandingServicesBlob__right">
  <h2>Marketing</h2>
  <p>Attention to detail, creative eye for design, and writing an efficient code. Comfortable of using: Photoshop, Illustrator, Canvas, Figma.</p>
  <Link to="/home" className='LandingServicesBlob__rightLink'>
  <p>View projects</p>
  </Link>
</div>
        </div>
        </div>
        </div>
    )
}

export default LandingServicesCards
