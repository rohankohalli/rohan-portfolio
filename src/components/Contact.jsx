import React, { useState } from 'react';

// Loads the Formspree Endpoint ID from environment variables.
// Register at https://formspree.io to get your ID.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_ID"; 

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulated submission if the ID hasn't been configured yet (helpful for developer preview)
    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      console.warn("Formspree ID is not configured yet. Simulating success state.");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Transmission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="footer-contact reveal-on-load delay-4">
      <div className="contact-info">
        <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_05</span>
        <h2 className="contact-title">05/CONTACT</h2>
        
        <p className="contact-email">
          Let’s collaborate. Reach out directly via email or check my digital footprints.
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
          [ EMAIL // rohan.kohalli@gmail.com ]
        </p>

        <div className="social-links">
          <a href="https://github.com/rohankohalli/" target="_blank" rel="noreferrer" className="social-item">
            <span>[ GITHUB ]</span> <span className="social-arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/rohan-kohalli/" target="_blank" rel="noreferrer" className="social-item">
            <span>[ LINKEDIN ]</span> <span className="social-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="contact-form-container">
        {submitted ? (
          <div style={{ 
            border: '1px solid var(--border-color)', 
            padding: '2.5rem', 
            textAlign: 'center', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 0,
            backgroundColor: 'rgba(var(--text-color), 0.005)'
          }}>
            <span className="mono-tag" style={{ fontSize: '0.78rem', marginBottom: '0.75rem', color: 'var(--accent-color)' }}>
              TRANSMISSION // SUCCESS
            </span>
            <p style={{ fontSize: '0.98rem', marginBottom: '1.5rem', maxWidth: '450px', lineHeight: '1.5' }}>
              Message logged successfully. I will review the transmission logs and follow up shortly.
            </p>
            <button 
              className="theme-btn" 
              onClick={() => setSubmitted(false)}
              style={{ padding: '0.45rem 0.9rem' }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form className="minimal-form" onSubmit={handleSubmit}>
            {error && (
              <div style={{ 
                border: '1px solid var(--accent-color)', 
                padding: '1rem', 
                borderRadius: 0, 
                backgroundColor: 'rgba(var(--accent-rgb), 0.03)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-color)',
                lineHeight: '1.4'
              }}>
                [ERROR_LOG] // {error.toUpperCase()}
              </div>
            )}
            
            <div className="form-group">
              <input 
                className="form-input" 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name} 
                onChange={handleChange}
                required 
                disabled={isSubmitting}
                placeholder=" "
              />
              <span className="form-underline-glow"></span>
              <label className="form-label" htmlFor="name" style={{ order: -1 }}>01_Sender_Name</label>
            </div>
            
            <div className="form-group">
              <input 
                className="form-input" 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange}
                required 
                disabled={isSubmitting}
                placeholder=" "
              />
              <span className="form-underline-glow"></span>
              <label className="form-label" htmlFor="email" style={{ order: -1 }}>02_Sender_Mail</label>
            </div>
            
            <div className="form-group">
              <textarea 
                className="form-input" 
                id="message" 
                name="message" 
                rows="4"
                value={formState.message} 
                onChange={handleChange}
                required 
                disabled={isSubmitting}
                placeholder=" "
                style={{ resize: 'vertical' }}
              />
              <span className="form-underline-glow"></span>
              <label className="form-label" htmlFor="message" style={{ order: -1 }}>03_Payload_Message</label>
            </div>
            
            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "TRANSMITTING..." : "Transmit message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
