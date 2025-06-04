import React from "react";
import styles from "./Experience.module.css";
import skills from "../../experienceData/skills.json";
import history from "../../experienceData/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline Column */}
        <div className={styles.experienceColumn}>
          <div className={styles.timelineContainer}>
            {history.map((historyItem, id) => {
              return (
                <div key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};