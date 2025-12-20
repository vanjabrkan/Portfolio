import React from "react";
import "./cv.css";
import VanjaCV from "../assets/VanjaCV.jpg";
const CV = () => {
  return (
    <div className="cv-container">
      <HeaderInfo />
      <DownloadButton />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Certifications />
      <Personal />
    </div>
  );
};

export default CV;

function HeaderInfo() {
  return (
    <section className="cv-header">
      <div className="cv-title">
        <h1>Vanja Brkan Stankic</h1>
        <h2>Test Automation Developer with Frontend expertise</h2>
        <img src={VanjaCV} alt="Profile" className="cv-photo" />
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS",
    "Git",
    "REST API",
    "DBeaver",
    "pgAdmin",
    "Cypress",
    "Postman",
    "Selenium WebDriver",
    "JIRA",
    "TestRail",
    "DataDog",
    "Murex",
  ];

  return (
    <section className="cv-section">
      <h3>Skills</h3>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="cv-section">
      <h3>Experience</h3>

      <div className="cv-item">
        <h4>Software Test Developer — LEVI 9 GLOBAL SOURCING BALKAN DOO</h4>
        <span>2021 — 2024</span>
        <p>Responsibilities: </p>
        <div className="cv-list cv-item">
          <ul>
            <li>Utilized Swagger for validation of API endpoints</li>
            <li>Performed API testing in Postman</li>
            <li>
              Developed End-to-End tests utilizing Cypress and Selenium
              WebDriver
            </li>
            <li>Created REST API tests with Cucumber</li>
            <li>Designed test cases and reported bugs effectively</li>
            <li>Collaborated in Scrum methodology for agile development</li>
          </ul>
        </div>
      </div>

      <div className="cv-item">
        <h4>IT Consultant — Synechron </h4>
        <span>2019 — 2021</span>
        <p>Responsibilites: </p>
        <div className="cv-list cv-item">
          <ul>
            <li>Provided IT solutions for Danish banks</li>
            <li>Fixed production bugs</li>
            <li>
              Wrote optimized SQL queries, created views, and performed updates
              in the database
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="cv-section">
      <h3>Education</h3>

      <div className="cv-item">
        <h4>University of Novi Sad</h4>
        <p>Field of study: Business Information Systems</p>
        <span>2014 — 2020</span>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section className="cv-section">
      <h3>Languages</h3>

      <div className="cv-list cv-item">
        <ul>
          <li>Serbo-Croatian: Native language</li>
          <li>English: Fluent</li>
          <li>German: B1 - B2</li>
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="cv-section">
      <h3>Certifications</h3>

      <div className="cv-list cv-item">
        <ul>
          <li>
            Playwright JS Automation Testing from Scratch with Framework
            (Issuing organization: Udemy)
          </li>
          <li>GOETHE-ZERTIFIKAT A1 - START DEUTSCH 1</li>
          <li>
            Cypress: Web Automation Testing from Zero to Hero (Issuing
            organization: Udemy)
          </li>
          <li>
            Quick Introduction to Postman and API Testing for Beginners (Issuing
            organization: Udemy)
          </li>
          <li>Driver's license: Category B</li>
        </ul>
      </div>
    </section>
  );
}
function Personal() {
  return (
    <section className="cv-section">
      <h3>Personal</h3>

      <div className="cv-list cv-item">
        <ul>
          <li>Board games</li>
          <li>Photography</li>
          <li>Reading books</li>
          <li>Gardening and flower planting</li>
        </ul>
      </div>
    </section>
  );
}

function DownloadButton() {
  return (
    <div className="cv-download">
      <a
        href="/Portfolio/Vanja Brkan Stankic CV.pdf"
        download
        className="download-btn"
      >
        Download CV
      </a>
    </div>
  );
}
