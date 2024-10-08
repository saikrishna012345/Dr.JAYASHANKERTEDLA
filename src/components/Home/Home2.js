import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/Annaya1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <i><b className="purple"></b></i>
            Hello, I am <i><b className="purple">Dr. Jaya Shanker Tedla</b></i>, a <i><b className="purple">Certified Neuro Developmental Therapist</b></i> with extensive experience in the field of <i><b className="purple">Physical Therapy</b></i>. I hold a <i><b className="purple">Ph.D.</b></i> and have worked as an <i><b className="purple">Associate Professor</b></i> for 18 years, specializing in <i><b className="purple">Pediatric and Neurological Rehabilitation</b></i> services.
            <br></br>
            I have served as the <i><b className="purple">Assistant Head</b></i> of the <i><b className="purple">Department of Medical Rehabilitation Sciences</b></i> at <i><b className="purple">King Khalid University</b></i>, Saudi Arabia. Currently, I am the <i><b className="purple">program coordinator</b></i>, overseeing examination, measurement, and evaluation activities. I have conducted numerous <i><b className="purple">teaching</b></i> sessions, published <i><b className="purple">research</b></i> articles, and secured grants for research projects.
            <br></br>
            My research projects include studies on <i><b className="purple">cryotherapy</b></i>, <i><b className="purple">bridging exercise</b></i>, <i><b className="purple">diastases recti</b></i>, and the impact of <i><b className="purple">Kinesio-taping</b></i> on <i><b className="purple">hand function</b></i> in children with <i><b className="purple">Cerebral Palsy</b></i>. I have also presented at various <i><b className="purple">conferences</b></i> and have ongoing projects focusing on <i><b className="purple">low-level laser therapy</b></i> and other therapeutic interventions.
            <br></br>
            I hold a <i><b className="purple">Bachelor and Master of Physical Therapy</b></i> from <i><b className="purple">Manipal University</b></i>, India, and certifications in <i><b className="purple">Neuro Developmental Therapy</b></i> for Pediatrics and Adults. Additionally, I have completed courses in <i><b className="purple">sensory integration</b></i>, <i><b className="purple">constrained induced movement therapy</b></i>, and <i><b className="purple">biostatistics</b></i>.
            <br></br>
            I am proficient in multiple languages including <i><b className="purple">Telugu</b></i>, <i><b className="purple">English</b></i>, <i><b className="purple">Hindi</b></i>, <i><b className="purple">Kannada</b></i>, and <i><b className="purple">Malayalam</b></i>. My skills include <i><b className="purple">advanced knowledge</b></i> in Physical Therapy, <i><b className="purple">Pediatric and Neurological Rehabilitation</b></i>, and expertise in various <i><b className="purple">therapeutic techniques</b></i> such as <i><b className="purple">NDT</b></i> and sensory integration. I am dedicated to <i><b className="purple">enhancing patient care</b></i> and <i><b className="purple">advancing research</b></i> in the field of Physical Therapy.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
