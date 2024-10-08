import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Dr. Jaya Shanker Tedla</span> is an associate professor and Program Coordinator for the Physical Therapy Program at King Khalid University, Abha. He completed his Bachelor's, Master's, and Ph.D in Physical Therapy at <span className="purple">Manipal University</span>, India. Further, he obtained a <span className="purple">post-doctoral fellowship</span> in non-invasive brain stimulation from the <span className="purple">University of Saint Augustine</span>, <span className="purple">Brazil</span>, and a <span className="purple">fellowship in transcranial direct current stimulation from New York</span>, <span className="purple">USA</span>. He is a <span className="purple">certified neurodevelopmental therapist</span> at basic and three advanced levels from the Neurodevelopment Therapy Association, USA. he has <span className="purple">four levels of proprioceptive neuromuscular facilitation advanced certifications</span> from the International PNF Association, USA, and <span className="purple">four advanced levels of Sensory Integration certification from the University of Southern California, USA</span>. Furthermore, he has a <span className="purple">Kinesio taping Certification from the International Kinesio Taping Association, USA</span>. He has <span className="purple">over 20 years of experience</span> teaching and patient care at the University level. He has treated over one lakh patients in India, Iraq, Dubai, the USA, Brazil, and Saudi Arabia. He <span className="purple">published more than 120 research papers</span> in peer-reviewed international journals. He obtained more than <span className="purple">ten national and international research grants</span> in Physical therapy worth more than five crores. He has <span className="purple">three patents in Physical therapy</span> and two more in the process. He published 2 Textbooks in physical therapy. He is currently the <span className="purple">editor</span> of the Journal of disability research from King Salman Center for Disability Research, associate editor of the Journal of Physical Therapy, an International advisory board member of the Indian Journal of Physical Therapy and Research, and an Editorial advisory board member of the Indian Journal of Physiotherapy and Occupational Therapy. He is a <span className="purple">reviewer for more than 30 international Physical Therapy and Rehabilitation journals</span>, guided many doctoral and master's students, evaluated doctoral theses for many universities, and conducted <span className="purple">more than 50 workshops</span> on the critical concepts of Physical Therapy worldwide. He is currently a <span className="purple">consultant in pediatric physical therapy</span> for the Saudi Commission for Health Specialities and is licensed to practice Physical Therapy in Dubai by the Dubai Health Authority. He was Vice President of Saudi Arabia Telugu Association West Region for five years; currently, for the past two years, he has been <span className="purple">President of Saudi Arabia Telugu Association South Region</span>; through this organization, they have helped many Indian workers and drivers in need. He conducted many cultural gatherings for Indians in Saudi Arabia. He is <span className="purple">President of the Parent Teachers Association of Lana Advanced International School</span>, Khamis Mushayath, Saudi Arabia, where more than 1000 Indian students studying the CBSE syllabus. He can speak around eight languages.
<span className="purple"></span>
          </p>
          <p style={{ textAlign: "justify" }}>
          Along with physical therapy, he has a <span className="purple">diploma in yoga therapy, acupuncture, osteopathy, and manipulation therapy</span>. He attended more than 300 workshops and 50 conferences in physical therapy around the globe. He worked along with the Kurdistan Children Foundation, Iraq, for the rehabilitation of children who were chemical bombed in Iraq. Presented many research papers globally over many conferences in physical therapy. 
          </p>
          <h3 style={{ textAlign: "justify" }}>
          He has following recent <span className="purple">awards</span> in <span className="purple">physical therapy</span>
          </h3>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Physical Therapy Excellence Award</span> by Krishna Institute of Medical Sciences, India, on <span className="purple">16th June 2024</span>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Certificate of Appreciation</span> or Contribution as a Resource person for a workshop on Outcome measures in Neurological Physical therapy Organized by Krishna Institute of Medical Sciences, India. On <span className="purple">15th and 16th June2024</span>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Certificate of Appreciation</span> Awarded to the Coordinator of the Physical Therapy Program at the Department of Medical Rehabilitation, College of Applied Medical Sciences, King Khalid University, KSA. On <span className="purple">5th June 2024</span>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Certificate of Appreciation</span> for the best community services from the College of Applied Medical Sciences, King Khalid University, KSA. On <span className="purple">7th May 2024</span>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Certificate of Achievement</span> for Contribution as a Resource person for the Principles of Kinesio Taping Therapy workshop conducted by the Department of Medical Rehabilitation, College of Applied Medical Sciences, King Khalid University, KSA.   On <span className="purple">24th and 25th April 2024</span>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Certificate of Achievement</span> for Contribution as a Resource person for the workshop on Understanding Type 2 diabetes and the role of Exercise: PT Perspective. Conducted by the Department of Medical Rehabilitation, College of Applied Medical Sciences, King Khalid University, KSA. On <span className="purple">29th January 2024</span> .
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Global achievers award</span> for outstanding achievements and remarkable contributions in Physiotherapy from KTK Outstanding Achievers and Education Foundation in New Delhi on <span className="purple">3rd December 2023</span> .
            </li>
            <li className="about-activity">
              <ImPointRight /> Certificate of Excellence as <span className="purple">Best Physiotherapist Award</span> from KTK Foundation, New Delhi, India, for Best academic and scientific practice in the field of Physical Therapy.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          <footer className="blockquote-footer">Dr.Jaya Shanker Tedla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
