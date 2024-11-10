/**
 * This code was generated by Builder.io
 */
import React, { useState } from "react";
import styles from "./EarlyAccessForm.module.css";
import { generateClient } from "aws-amplify/data";

const client = generateClient();


function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();
    try {
      // Replace "Todo" with your actual model (e.g., EarlyAccessForm)
      await client.models.Todo.create({
        email: email, suggestion: suggestion,
      });
      setSubmissionStatus("Thank you! Your response has been submitted.");
      setFormData({ email: "", suggestion: "" }); // Reset the form
    } catch (error) {
      console.error("Error submitting form data:", error);
      setSubmissionStatus("Failed to submit. Please try again.");
    }
  };



  // State for submission feedback


  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b462a469d6f3a74c1552e99bf221b2cf6d93ed31fffabc03b25e42b4c0b33d5e?placeholderIfAbsent=true&apiKey=db7985d8f6d84e9c9434dc369e493328"
              className={styles.logo}
              alt="Company logo"
            />
          </div>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Get early access to our app</h1>
          </div>
        </header>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <div className={styles.suggestionWrapper}>
            <label htmlFor="emailInput" className={styles.suggestionLabel}>
              Email*
            </label>
            <input
              type="email"
              id="emailInput"
              className={styles.suggestionInput}
              value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className={styles.suggestionWrapper}>
            <label htmlFor="suggestionInput" className={styles.suggestionLabel}>
              Any Suggestion?
            </label>
            <textarea
              id="suggestionInput"
              className={styles.suggestionInput}
              rows="3"
              value={formData.suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              aria-label="Any Suggestion?"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default EarlyAccessForm;
