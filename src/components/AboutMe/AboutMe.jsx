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
              <img src={getImageUrl("development.png")} alt="Product Management icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Technical Product Manager</h3>
              <p>
                Leading epic delivery across Agile sprints, using Claude AI to audit frontend specs, 
                identify Figma documentation gaps, and generate engineering-ready Jira tickets. 
                Coordinating cross-functional teams across engineering, QA, and design to ship 
                features on time and at scope.
              </p>
              <div className={styles.techTags}>
                <span>Jira</span>
                <span>Figma</span>
                <span>Agile</span>
                <span>Sprint Planning</span>
                <span>Claude AI</span>
                <span>Product Delivery</span>
              </div>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img src={getImageUrl("artifical-intelligence.png")} alt="AI Engineering icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>
                Building production AI systems with LLMs, MCPs, and agentic frameworks. 
                Architected MCP ecosystems with 15+ tools, built LangGraph reactive agents 
                with PostgreSQL checkpointing, and shipped AI-powered product features 
                that increased conversion by 35% and cut latency by 40%.
              </p>
              <div className={styles.techTags}>
                <span>LLMs</span>
                <span>LangChain</span>
                <span>LangGraph</span>
                <span>MCPs</span>
                <span>RAG</span>
                <span>Claude Sonnet</span>
                <span>FastMCP</span>
              </div>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img src={getImageUrl("service.png")} alt="Full Stack Development icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                Building end-to-end web applications across the full stack. Experience shipping 
                production-ready UIs in React and Next.js, building backend APIs with Node.js 
                and FastAPI, and working across cloud infrastructure with AWS, Docker, and PostgreSQL.
              </p>
              <div className={styles.techTags}>
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>PostgreSQL</span>
                <span>AWS</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.achievements}>
        <div className={styles.achievement}>
          <h4>Current Roles</h4>
          <p>TPM Intern @ Marketeq · AI Engineer & PM @ VeSoko</p>
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
