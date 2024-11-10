import React, { useState } from "react";
///import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import styles from "./EarlyAccessForm.module.css";

const client = generateClient();


    
function EarlyAccessForm() {
    // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    suggestion: "",
  });

  // State for submission feedback
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace "Todo" with your actual model (e.g., EarlyAccessForm)
      await client.models.Todo.create({
        content: `Email: ${formData.email}, Suggestion: ${formData.suggestion}`,
      });
      setSubmissionStatus("Thank you! Your response has been submitted.");
      setFormData({ email: "", suggestion: "" }); // Reset the form
    } catch (error) {
      console.error("Error submitting form data:", error);
      setSubmissionStatus("Failed to submit. Please try again.");
    }
  };
  
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
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="emailInput" className={styles.visually-hidden}>Email</label>
            <input
              type="email"
              id="emailInput"
              className={styles.input}
              placeholder="Email*"
              aria-required="true"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.suggestionWrapper}>
            <label htmlFor="suggestionInput" className={styles.suggestionLabel}>Any Suggestion?</label>
            <textarea
              id="suggestionInput"
              className={styles.suggestionInput}
              rows="3"
              aria-label="Any Suggestion?"
              value={formData.suggestion}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Explore
          </button>
        </form>
        {submissionStatus && <p>{submissionStatus}</p>}

      </div>
    </main>
  );
}

export default EarlyAccessForm;