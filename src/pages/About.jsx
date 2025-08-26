import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaGraduationCap, FaUsers, FaExclamationTriangle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="about">
      {/* Header Section */}
      <section className="about-header section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">About Trading Reality Check</h1>
            <p className="page-subtitle">
              Our mission to educate and protect individuals from the risks of trading markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mission-header">
              <FaHeart className="mission-icon" />
              <h2>Our Mission</h2>
            </div>
            <p>
              Trading Reality Check was created to provide evidence-based information about the 
              harsh realities of trading markets. We believe that education is the best protection 
              against financial losses and emotional distress caused by unrealistic expectations about trading.
            </p>
            <p>
              Our goal is to help individuals make informed decisions about their financial future 
              by presenting research-backed facts about trading risks and offering safer alternatives 
              for building wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="why-exist section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaExclamationTriangle /> Why We Exist
          </motion.h2>

          <motion.div 
            className="reasons-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="reason-card" variants={fadeInUp}>
              <div className="reason-icon">
                <FaShieldAlt />
              </div>
              <h3>Protect Individuals</h3>
              <p>
                We want to protect people from the devastating financial and emotional consequences 
                of trading losses. Many individuals lose their life savings and suffer from depression 
                due to unrealistic expectations about trading.
              </p>
            </motion.div>

            <motion.div className="reason-card" variants={fadeInUp}>
              <div className="reason-icon">
                <FaGraduationCap />
              </div>
              <h3>Provide Education</h3>
              <p>
                Most people are not aware of the statistical realities of trading. We provide 
                evidence-based education to help individuals understand the risks and make informed decisions.
              </p>
            </motion.div>

            <motion.div className="reason-card" variants={fadeInUp}>
              <div className="reason-icon">
                <FaUsers />
              </div>
              <h3>Counter Misinformation</h3>
              <p>
                Social media and marketing often promote unrealistic expectations about trading. 
                We counter this misinformation with facts and research to provide a balanced perspective.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap /> Our Approach
          </motion.h2>

          <motion.div 
            className="approach-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="approach-card" variants={fadeInUp}>
              <h3>Evidence-Based</h3>
              <p>
                All our content is based on academic research, peer-reviewed studies, and 
                statistical data. We don't rely on opinions or anecdotes, but on verifiable facts.
              </p>
            </motion.div>

            <motion.div className="approach-card" variants={fadeInUp}>
              <h3>Balanced Perspective</h3>
              <p>
                We present both the risks of trading and safer alternatives. Our goal is not 
                to discourage all investing, but to promote informed decision-making.
              </p>
            </motion.div>

            <motion.div className="approach-card" variants={fadeInUp}>
              <h3>Educational Focus</h3>
              <p>
                We focus on education rather than fear-mongering. Our content helps people 
                understand the realities so they can make their own informed decisions.
              </p>
            </motion.div>

            <motion.div className="approach-card" variants={fadeInUp}>
              <h3>Constructive Solutions</h3>
              <p>
                Beyond highlighting risks, we provide practical alternatives and strategies 
                for building wealth through safer, proven methods.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We're Not Section */}
      <section className="what-we-are-not section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaShieldAlt /> What We're Not
          </motion.h2>

          <motion.div 
            className="not-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="not-card" variants={fadeInUp}>
              <h3>Anti-Investing</h3>
              <p>
                We are not against investing. We support long-term, diversified investing 
                strategies that have proven track records of success.
              </p>
            </motion.div>

            <motion.div className="not-card" variants={fadeInUp}>
              <h3>Financial Advisors</h3>
              <p>
                We do not provide personalized financial advice. Our content is educational 
                and informational. Always consult qualified professionals for personal advice.
              </p>
            </motion.div>

            <motion.div className="not-card" variants={fadeInUp}>
              <h3>Motivated by Profit</h3>
              <p>
                We don't sell trading courses, signals, or financial products. Our motivation 
                is purely educational and protective.
              </p>
            </motion.div>

            <motion.div className="not-card" variants={fadeInUp}>
              <h3>Fear-Based</h3>
              <p>
                We don't use fear tactics or sensationalism. Our approach is factual, 
                educational, and focused on empowerment through knowledge.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section section">
        <div className="container">
          <motion.div 
            className="disclaimer-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Important Disclaimer</h2>
            <p>
              <strong>Educational Purpose Only:</strong> This website is for educational and informational 
              purposes only. We do not provide financial advice, and our content should not be considered 
              as such.
            </p>
            <p>
              <strong>Not Financial Advice:</strong> Always consult with qualified financial professionals 
              before making investment decisions. Your financial situation is unique and requires 
              personalized advice.
            </p>
            <p>
              <strong>Past Performance:</strong> Past performance does not guarantee future results. 
              All investments carry risk, and you may lose money.
            </p>
            <p>
              <strong>Do Your Own Research:</strong> We encourage you to conduct your own research 
              and due diligence before making any financial decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get in Touch</h2>
            <p>
              Have questions, suggestions, or want to share your experience? We'd love to hear from you. 
              Your feedback helps us improve our educational content and reach more people who need this information.
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> contact@tradingrealitycheck.com</p>
              <p><strong>Purpose:</strong> Educational content and feedback only</p>
              <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
