import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaExclamationTriangle, FaUsers, FaDollarSign, FaClock, FaBrain } from 'react-icons/fa';
import './Statistics.css';

const Statistics = () => {
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
    <div className="statistics">
      {/* Header Section */}
      <section className="stats-header section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Trading Failure Statistics</h1>
            <p className="page-subtitle">
              Evidence-based data showing the harsh reality of trading markets and why most traders fail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics Grid */}
      <section className="key-stats section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="stat-card primary" variants={fadeInUp}>
              <div className="stat-icon">
                <FaExclamationTriangle />
              </div>
              <div className="stat-number">99%</div>
              <div className="stat-label">Failure Rate</div>
              <div className="stat-description">
                Of retail traders fail to achieve consistent profitability
              </div>
            </motion.div>

            <motion.div className="stat-card danger" variants={fadeInUp}>
              <div className="stat-icon">
                <FaDollarSign />
              </div>
              <div className="stat-number">80%</div>
              <div className="stat-label">Lose Money</div>
              <div className="stat-description">
                Of day traders lose money in the long run
              </div>
            </motion.div>

            <motion.div className="stat-card warning" variants={fadeInUp}>
              <div className="stat-icon">
                <FaClock />
              </div>
              <div className="stat-number">6.5%</div>
              <div className="stat-label">Annual Underperformance</div>
              <div className="stat-description">
                Individual investors underperform the market by this amount
              </div>
            </motion.div>

            <motion.div className="stat-card info" variants={fadeInUp}>
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-number">90%</div>
              <div className="stat-label">Quit Within 1 Year</div>
              <div className="stat-description">
                Of new traders abandon trading within the first year
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Statistics */}
      <section className="detailed-stats section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Detailed Analysis
          </motion.h2>

          <motion.div 
            className="stats-details"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="detail-card" variants={fadeInUp}>
              <h3>Academic Research Findings</h3>
              <div className="detail-content">
                <div className="detail-item">
                  <strong>Barber & Odean Study (2000):</strong>
                  <p>Found that individual investors underperform the market by 6.5% annually due to excessive trading and poor timing.</p>
                </div>
                <div className="detail-item">
                  <strong>FCA Research (2022):</strong>
                  <p>80% of retail clients trading CFDs lost money, with average losses exceeding initial deposits.</p>
                </div>
                <div className="detail-item">
                  <strong>North American Securities Administrators Association:</strong>
                  <p>Day trading is considered one of the riskiest get-rich-quick schemes with extremely high failure rates.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="detail-card" variants={fadeInUp}>
              <h3>Behavioral Finance Insights</h3>
              <div className="detail-content">
                <div className="detail-item">
                  <strong>Overconfidence Bias:</strong>
                  <p>Studies show that overconfident traders trade more frequently and take excessive risks, leading to worse performance.</p>
                </div>
                <div className="detail-item">
                  <strong>Loss Aversion:</strong>
                  <p>Traders hold losing positions 50% longer than winning positions, amplifying their losses.</p>
                </div>
                <div className="detail-item">
                  <strong>Herd Mentality:</strong>
                  <p>Following crowd behavior leads to buying at peaks and selling at bottoms, the opposite of profitable trading.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="detail-card" variants={fadeInUp}>
              <h3>Market Structure Disadvantages</h3>
              <div className="detail-content">
                <div className="detail-item">
                  <strong>Information Asymmetry:</strong>
                  <p>Professional traders have access to superior information, tools, and resources that retail traders lack.</p>
                </div>
                <div className="detail-item">
                  <strong>High-Frequency Trading:</strong>
                  <p>HFT firms execute trades in milliseconds, giving them a massive advantage over human traders.</p>
                </div>
                <div className="detail-item">
                  <strong>Transaction Costs:</strong>
                  <p>Commissions, spreads, and fees eat into profits, making it harder for retail traders to break even.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="risk-factors section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Risk Factors
          </motion.h2>

          <motion.div 
            className="risk-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="risk-card" variants={fadeInUp}>
              <div className="risk-icon">
                <FaBrain />
              </div>
              <h3>Psychological Biases</h3>
              <ul>
                <li>Overconfidence in trading abilities</li>
                <li>Fear of missing out (FOMO)</li>
                <li>Loss aversion and sunk cost fallacy</li>
                <li>Confirmation bias in analysis</li>
              </ul>
            </motion.div>

            <motion.div className="risk-card" variants={fadeInUp}>
              <div className="risk-icon">
                <FaChartBar />
              </div>
              <h3>Poor Risk Management</h3>
              <ul>
                <li>Not using stop-loss orders</li>
                <li>Over-leveraging positions</li>
                <li>Lack of portfolio diversification</li>
                <li>Insufficient capital reserves</li>
              </ul>
            </motion.div>

            <motion.div className="risk-card" variants={fadeInUp}>
              <div className="risk-icon">
                <FaClock />
              </div>
              <h3>Time and Resource Constraints</h3>
              <ul>
                <li>Insufficient time for market analysis</li>
                <li>Lack of professional tools and data</li>
                <li>Inability to monitor markets 24/7</li>
                <li>Limited access to research resources</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="stats-warning section">
        <div className="container">
          <motion.div 
            className="warning-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="warning-header">
              <FaExclamationTriangle />
              <h2>Critical Warning</h2>
            </div>
            <p>
              These statistics are not meant to discourage you from investing, but to help you make informed decisions. 
              The data clearly shows that active trading is extremely difficult and risky for retail investors. 
              Consider safer alternatives like long-term investing in diversified index funds.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
