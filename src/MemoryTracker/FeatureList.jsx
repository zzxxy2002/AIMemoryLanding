/**
 * This code was generated by Builder.io
 */
import React from "react";
import styles from "./FeatureList.module.css";

const features = [
  {
    id: "01",
    title: "Capture Moments Effortlessly with AI-Driven Commands",
  },
  {
    id: "02",
    title: "Automatic Transcription and Rich Summaries of Every Experience",
  },
  {
    id: "03",
    title: "Relive Your Memories in Real-Time, Right Where They Happened",
  },
];

function FeatureList() {
  return (
    <section className={styles.featureList}>
      {features.map((feature) => (
        <article key={feature.id} className={styles.featureItem}>
          <span className={styles.featureId}>{feature.id}</span>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
        </article>
      ))}
    </section>
  );
}

export default FeatureList;
