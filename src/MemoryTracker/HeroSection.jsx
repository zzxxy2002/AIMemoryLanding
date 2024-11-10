/**
 * This code was generated by Builder.io
 */
import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>
          Relive Your Memories in Real-Time, Right Where They Happened
        </h2>
        <p className={styles.heroDescription}>
          Relive the moments you cherish through AI powered personal memory
          tracker
        </p>
        <button className={styles.ctaButton}>Join our waitlist</button>
      </div>
      <div className={styles.heroImages}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58675012a67c0fbb6ff60d290b0eed9829c3eaa784220663e7cd1dd242663de2?placeholderIfAbsent=true&apiKey=db7985d8f6d84e9c9434dc369e493328"
          alt="Memory tracker interface"
          className={styles.primaryImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e766b974f2b72e7c34ee08d83fa98596629091ba9d4a6852d7fb505629799d0d?placeholderIfAbsent=true&apiKey=db7985d8f6d84e9c9434dc369e493328"
          alt="User reliving a memory"
          className={styles.secondaryImage}
        />
      </div>
    </section>
  );
}

export default HeroSection;
