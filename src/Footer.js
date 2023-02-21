import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="Footer">
            {/* Footer */}
           
<footer className="page-footer font-small mdb-color pt-4 mt-4 mb-4">
  {/* Footer Links */}
  <div className="container text-center text-md-left">
    {/* Footer links */}
    <div className="row text-center text-md-left mt-3 pb-3">
      {/* Grid column */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">FullStack Developer</h6>
        <p>This website were Completely done by me from Scratch. The Website is a Portfolio that Represents my Colletion of Webapps
          as an Example of my Expirience with Wrighting Code, Deploy and manage SMM. </p>
      </div>
      {/* Grid column */}
      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <Link to="/home">MDBootstrap</Link>
        </p>
        <p>
          <Link to="/home">ReactJs</Link>
        </p>
        <p>
          <Link to="/home">PythonFlask</Link>
        </p>
        <p>
          <Link to="/home">NodeJs</Link>
        </p>
      </div>
      {/* Grid column */}
      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="https://www.linkedin.com/in/cristina-chiticari-fullstack/">LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com/KristinaFrants">Github</a>
        </p>
        <p>
          <a href="https://www.facebook.com/kristina.frants/">Facebook</a>
        </p>
        <p>
          <a href="https://slack.com/">Slack</a>
        </p>
      </div>
      {/* Grid column */}
      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <FontAwesomeIcon icon={faHome} className="mr-3" /> Miami, FL 33009, US</p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className=" mr-3" /> cristina.chiticari@gmail.com</p>
        <p>
          <FontAwesomeIcon icon={faPhone} className=" mr-3" />contact for phone</p>
        <p>
          <FontAwesomeIcon icon={faPrint} className="mr-3" />contact for more</p>
      </div>
      {/* Grid column */}
    </div>
    {/* Footer links */}
    <hr />
    {/* Grid row */}
    <div className="row d-flex align-items-center">
      {/* Grid column */}
      <div className="col-md-7 col-lg-8">
        {/*Copyright*/}
        <p className="text-center text-md-left">© 2023 Copyright:
          <a href="https://github.com/KristinaFrants/">
            <strong> Kristina Frants </strong>
          </a>
        </p>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-5 col-lg-4 ml-lg-0">
        {/* Social buttons */}
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/kristina.frants/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <FontAwesomeIcon icon={faFacebook} className="" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/KristinaFrants/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://mail.google.com/chat/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <FontAwesomeIcon icon={faGooglePlus} className="" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/cristina-chiticari-fullstack/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
</footer>
{/* Footer */}

        </div>
    )
}


export default Footer
