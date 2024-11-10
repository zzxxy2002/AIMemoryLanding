import React from "react";
import styles from './EarlyAccessForm.module.css';

function EarlyAccessForm() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b462a469d6f3a74c1552e99bf221b2cf6d93ed31fffabc03b25e42b4c0b33d5e?placeholderIfAbsent=true&apiKey=db7985d8f6d84e9c9434dc369e493328" className={styles.logo} alt="Company logo" />
          </div>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Get early access to our app</h1>
          </div>
        </header>
        <form className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="emailInput" className={styles.visually-hidden}>Email</label>
            <input
              type="email"
              id="emailInput"
              className={styles.input}
              placeholder="Email*"
              aria-required="true"
            />
          </div>
          <div className={styles.suggestionWrapper}>
            <label htmlFor="suggestionInput" className={styles.suggestionLabel}>Any Suggestion?</label>
            <textarea
              id="suggestionInput"
              className={styles.suggestionInput}
              rows="3"
              aria-label="Any Suggestion?"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Explore
          </button>
        </form>
      </div>
    </main>
  );
}

export default EarlyAccessForm;