import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mwizalaura12@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy email');
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.title}>
        <h2>Contact Me</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img className={styles.linkImages} src={getImageUrl("gmail.png")} alt="Email icon" />
          </div>
          <div className={styles.linkContent}>
            <a href="mailto:mwizalaura12@gmail.com">mwizalaura12@gmail.com</a>
            <button 
              className={styles.copyButton} 
              onClick={copyEmail}
              title="Copy email to clipboard"
            >
              {emailCopied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img 
              className={styles.linkImages}
              src={getImageUrl("linkedin.png")}
              alt="LinkedIn icon"
            />
          </div>
          <div className={styles.linkContent}>
            <a 
              href="https://www.linkedin.com/in/laura-nsenga-718927262" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
            <span className={styles.linkDescription}>Professional Network</span>
          </div>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img className={styles.linkImages} src={getImageUrl("github.png")} alt="Github icon" />
          </div>
          <div className={styles.linkContent}>
            <a 
              href="https://github.com/LauraNsenga" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
            <span className={styles.linkDescription}>View My Code</span>
          </div>
        </li>
        
      </ul>
    </footer>
  );
};