import React, {useState} from 'react'
import './ContactForm.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function ContactForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    function sendEmail ()
{
    window.location = "mailto:cristina.chiticari@gmail.com";
}
    return (
        
        <div className="contact__formLanding ">
            <div className="gradient__canvasContact mb-4">
                <div className=" row canvas__contactInfo">
                    <div className="col-9 canvas__contactInfo__right">
                        <h2>Do you have a question or just want to say hi?<br/> Let’s talk.</h2>
                    </div>
                    <div className="col-sm-3 canvas__contactInfo__left">
                    <Button className="" variant="outline-light" size="lg" block onClick={handleShow}>Contact Me</Button>
                    </div>
                   
                </div>
            </div>
        

            <Modal

        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
          <div className="modal__contactForm">
        <Modal.Header closeButton >
          <Modal.Title className="modal__contactTitle" >Let's Work Together!</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h4> <FontAwesomeIcon icon={faGithub}/> <a className="modal__link" href="https://github.com/KristinaFrants">Github</a></h4>
       <hr></hr>
          <h4> <FontAwesomeIcon icon={faLinkedin}/> <a className="modal__link" href="https://www.linkedin.com/in/cristina-chiticari-fullstack/">LinkedIn</a></h4>
         
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={sendEmail} type="submit" variant="secondary" size="lg" block >Send Email</Button>
        </Modal.Footer>
       
        </div>
      </Modal>
    

        </div>
        
    )
}

export default ContactForm
