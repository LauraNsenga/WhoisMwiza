import React from "react";
import styles from "./Mwiza.module.css";
import { getImageUrl } from "../../utils";

export const Mwiza = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.statusDot}></span>
          Graduating August 2025 • Available for hire
        </div>
        
        <h1 className={styles.title}>Hi, I'm Laura</h1>
        
        <p className={styles.description}>
        I'm a Computer Science graduate specializing in Cybersecurity with a passion for full-stack development and AI integration. I have experience building scalable web applications using Vue.js, React, and Node.js, and I'm currently pursuing my Master's in Artificial Intelligence. Outside of tech, I'm active in my church's worship team as a vocalist and enjoy playing guitar/piano.I also enjoy going on walks and playing basketball.
        </p>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Years Coding</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Major Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Internships</span>
          </div>
        </div>
        
        <div className={styles.ctaButtons}>
          <a href="mailto:mwizalaura12@gmail.com" className={styles.contactBtn}>
            <span>Let's Connect</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            View My Work
          </a>
        </div>
      </div>
      
      <div className={styles.imageSection}>
        <div className={styles.floatingElements}>
          <div className={styles.techBadge} style={{'--delay': '0s'}}>Vue.js</div>
          <div className={styles.techBadge} style={{'--delay': '1s'}}>Node.js</div>
          <div className={styles.techBadge} style={{'--delay': '2s'}}>Python</div>
          <div className={styles.techBadge} style={{'--delay': '3s'}}>AI/ML</div>
          <div className={styles.techBadge} style={{'--delay': '4s'}}>React</div>
          <div className={styles.techBadge} style={{'--delay': '5s'}}>Cloud Security</div>
          <div className={styles.techBadge} style={{'--delay': '1.5s'}}>MySQL</div>
          <div className={styles.techBadge} style={{'--delay': '3.5s'}}>JavaScript</div>
        </div>
        
        <img
          src={getImageUrl("Mwiza.png")}
          alt="Laura Mwiza Nsenga - Full Stack Developer"
          className={styles.heroImg}
        />
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};