import React from 'react';
import './LandingPage.css';
import MailchimpForm from './MailchimpForm';

const LandingPage = () => {
  return (
    <div className="landing dark">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeIn">
            Understand Any Terms & Conditions{' '}
            <span className="highlight">in Minutes</span>
          </h1>
          <p className="hero-subtitle animate-fadeIn delay-100">
            Paste your T&C or provide a link, get a plain-language summary with
            audio you can download and review anytime.
          </p>

          {/* Mailchimp Form */}
          <div className="email-form animate-fadeIn delay-200">
            <MailchimpForm />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card animate-slideUp">
          <h2>How It Works</h2>
          <ol>
            <li>Paste your T&C or provide a link</li>
            <li>Generate summary and audio</li>
            <li>Download or listen anytime</li>
          </ol>
        </div>

        <div className="feature-card animate-slideUp delay-100">
          <h2>Why It Helps</h2>
          <ul>
            <li>Save time reading long legal documents</li>
            <li>Understand key points clearly</li>
            <li>Listen on-the-go with audio summaries</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
