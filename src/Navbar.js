import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFolderOpen, } from '@fortawesome/free-solid-svg-icons';



function NavigationBar() {
    const [{ basket, user }, dispatch] = useStateValue();

    function sendEmail ()
{
    window.location = "mailto:cristina.chiticari@gmail.com";
}

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
        <Navbar.Brand >
                    <Link to="/home">
                    <FontAwesomeIcon icon={faBriefcase} className= "header__logo m-1"/>
                    </Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mr-auto">

            <Nav.Link href= "/landing">
            <div className="header__right ">
                About
            </div>
          
            </Nav.Link>

            <Nav.Link href="/home">Portfolio</Nav.Link>

           
          </Nav>

          <Nav>
           
            <Nav.Link eventKey={2}>
              <Button className="startAproject__button" variant="outline-light" onClick = {sendEmail} >Connect</Button>
 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar