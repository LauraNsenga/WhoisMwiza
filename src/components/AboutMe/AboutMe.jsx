import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src={getImageUrl("8254240-2416.Jpg")}
            alt="Laura at Oklahoma Christian University Graduation"
            className={styles.aboutImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.badge}>
              <span>🎓</span>
              <span>Dual Degree Graduate</span>
            </div>
          </div>
        </div>
        
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img src={getImageUrl("development.png")} alt="Web Development icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                3+ years experience building end-to-end web applications with Vue.js, React, Node.js, 
                and MySQL. Specializing in RESTful APIs, JWT authentication, and database optimization.
              </p>
              <div className={styles.techTags}>
                <span>Vue.js</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img src={getImageUrl("artifical-intelligence.png")} alt="AI/ML icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>AI/ML Integration Specialist</h3>
              <p>
                Pursuing Master's in Computer Science with AI focus. Experience integrating 
                AI-powered features into web applications, including resume optimization 
                and smart task categorization systems.
              </p>
              <div className={styles.techTags}>
                <span>Python</span>
                <span>Machine Learning</span>
                <span>AI Integration</span>
              </div>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img src={getImageUrl("service.png")} alt="Quality Assurance icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Technology & QA Specialist</h3>
              <p>
                Professional experience in technology development and quality assurance. 
                Automated testing with Python scripts, ensured FCC compliance, and managed 
                full project lifecycles from concept to implementation.
              </p>
              <div className={styles.techTags}>
                <span>Python Testing</span>
                <span>FCC Compliance</span>
                <span>Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.achievements}>
        <div className={styles.achievement}>
          <h4>Most Recent Role</h4>
          <p>Technology Development Specialist at JASCO</p>
        </div>
        <div className={styles.achievement}>
          <h4>Education</h4>
          <p>Dual Degree: BS Computer Science + MS AI (2025)</p>
        </div>
        <div className={styles.achievement}>
          <h4>Honor Society</h4>
          <p>Omicron Sigma Sigma Member</p>
        </div>
      </div>
    </section>
  );
};