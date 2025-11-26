import React from "react";
import "./cv.css";

const CV = () => {
  return (
    <div className="cv-container">
      <HeaderInfo />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Certifications />
      <Personal />
      <DownloadButton />
    </div>
  );
};

export default CV;

function HeaderInfo() {
  return (
    <section className="cv-header">
      <div className="cv-title">
        <h1>Vanja Brkan Stankic</h1>
        <h2>Frontend Developer</h2>

        <p>
          Passionate developer with experience in React, UI/UX, and modern
          frontend design.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = ["React", "JavaScript", "HTML5", "CSS", "Git", "REST API"];

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
        <p>
          Responsibilities: <br />
          - Utilized Swagger for validation of API endpoints <br />
          - Performed API testing in Postman
          <br />
          - Developed End-to-End tests utilizing Cypress and Selenium WebDriver
          <br />
          - Created REST API tests with Cucumber
          <br />
          - Designed test cases and reported bugs effectively
          <br />- Collaborated in Scrum methodology for agile development
        </p>
      </div>

      <div className="cv-item">
        <h4>IT Consultant — Synechron </h4>
        <span>2019 — 2021</span>
        <p>
          Responsibilites: <br />
          - Provided IT solutions for Danish banks <br />
          - Fixed production bugs
          <br />
          - Wrote optimized SQL queries, created views, and performed updates in
          the database
          <br />
        </p>
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

      <div className="cv-item">
        <p>
          Serbo-Croatian: Native language
          <br />
          English: Fluent <br />
          German: B2
        </p>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="cv-section">
      <h3>Certifications</h3>

      <div className="cv-item">
        <p>
          GOETHE-ZERTIFIKAT A2
          <br />
          Playwright JS Automation Testing from Scratch with Framework (Issuing
          organization: Udemy)
          <br />
          GOETHE-ZERTIFIKAT A1 - START DEUTSCH 1<br />
          Cypress: Web Automation Testing from Zero to Hero (Issuing
          organization: Udemy)
          <br />
          Quick Introduction to Postman and API Testing for Beginners (Issuing
          organization: Udemy)
          <br />
          Driver's license: Category B
        </p>
      </div>
    </section>
  );
}
function Personal() {
  return (
    <section className="cv-section">
      <h3>Personal</h3>

      <div className="cv-item">
        <p>
          Board games
          <br />
          Photography
          <br />
          Reading books
          <br />
          Gardening and flower planting
          <br />
        </p>
      </div>
    </section>
  );
}

function DownloadButton() {
  return (
    <div className="cv-download">
      <a href="/Portfolio/Vanja Brkan Stankic CV.pdf" download className="download-btn">
        Download PDF
      </a>
    </div>
  );
}
