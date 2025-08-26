import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaChartLine, FaBook, FaUniversity, FaFlask } from 'react-icons/fa';
import './Research.css';

const Research = () => {
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
    <div className="research">
      {/* Header Section */}
      <section className="research-header section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Research & Studies</h1>
            <p className="page-subtitle">
              Evidence-based research and academic studies on trading market failures and behavioral finance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Studies Section */}
      <section className="academic-studies section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaUniversity /> Academic Research
          </motion.h2>

          <motion.div 
            className="studies-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="study-card" variants={fadeInUp}>
              <div className="study-header">
                <h3>Barber & Odean (2000)</h3>
                <span className="study-journal">The Journal of Finance</span>
              </div>
              <div className="study-content">
                <h4>"Trading is Hazardous to Your Wealth"</h4>
                <p>
                  This landmark study analyzed the trading behavior of 66,465 households and found that 
                  individual investors underperform the market by 6.5% annually. The research identified 
                  excessive trading and poor timing as the primary causes of underperformance.
                </p>
                <div className="key-findings">
                  <strong>Key Findings:</strong>
                  <ul>
                    <li>Individual investors underperform by 6.5% annually</li>
                    <li>Excessive trading reduces returns</li>
                    <li>Poor market timing significantly impacts performance</li>
                    <li>Men trade more frequently than women and underperform more</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="study-card" variants={fadeInUp}>
              <div className="study-header">
                <h3>Barber & Odean (2001)</h3>
                <span className="study-journal">The Quarterly Journal of Economics</span>
              </div>
              <div className="study-content">
                <h4>"Boys Will Be Boys: Gender, Overconfidence, and Common Stock Investment"</h4>
                <p>
                  This study examined the relationship between overconfidence and trading behavior, 
                  finding that overconfident investors trade more frequently and take excessive risks, 
                  leading to worse performance.
                </p>
                <div className="key-findings">
                  <strong>Key Findings:</strong>
                  <ul>
                    <li>Overconfidence leads to excessive trading</li>
                    <li>Men are more overconfident than women in trading</li>
                    <li>Overconfident traders take bigger risks</li>
                    <li>Higher trading frequency correlates with lower returns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="study-card" variants={fadeInUp}>
              <div className="study-header">
                <h3>Odean (1998)</h3>
                <span className="study-journal">The Journal of Finance</span>
              </div>
              <div className="study-content">
                <h4>"Are Investors Reluctant to Realize Their Losses?"</h4>
                <p>
                  This study examined the disposition effect, where investors hold losing positions 
                  longer than winning positions, and found that this behavior significantly reduces returns.
                </p>
                <div className="key-findings">
                  <strong>Key Findings:</strong>
                  <ul>
                    <li>Investors hold losing positions 50% longer than winners</li>
                    <li>Loss aversion leads to poor portfolio management</li>
                    <li>Emotional decision-making reduces returns</li>
                    <li>Professional traders also exhibit this bias</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Behavioral Finance Section */}
      <section className="behavioral-finance section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaBrain /> Behavioral Finance Insights
          </motion.h2>

          <motion.div 
            className="behavioral-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaBrain />
              </div>
              <h3>Overconfidence Bias</h3>
              <p>
                Traders consistently overestimate their abilities and the accuracy of their information. 
                This leads to excessive trading, increased risk-taking, and ultimately, financial losses.
              </p>
              <div className="behavioral-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Believing you can predict market movements</li>
                  <li>Ignoring contrary evidence</li>
                  <li>Taking larger positions than justified</li>
                  <li>Underestimating risks</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaChartLine />
              </div>
              <h3>Loss Aversion</h3>
              <p>
                People feel the pain of losses more intensely than the pleasure of gains. This causes 
                traders to hold losing positions too long and sell winning positions too early.
              </p>
              <div className="behavioral-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Holding losing trades hoping for recovery</li>
                  <li>Selling winners too quickly</li>
                  <li>Refusing to cut losses</li>
                  <li>Emotional attachment to positions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaBook />
              </div>
              <h3>Confirmation Bias</h3>
              <p>
                Traders seek information that confirms their existing beliefs and ignore contradictory evidence. 
                This narrows perspective and perpetuates mistakes.
              </p>
              <div className="behavioral-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Only reading bullish analysis for long positions</li>
                  <li>Ignoring warning signs</li>
                  <li>Selective memory of successful trades</li>
                  <li>Dismissing contrary opinions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaFlask />
              </div>
              <h3>Herd Mentality</h3>
              <p>
                Traders follow the crowd rather than making independent decisions. This leads to 
                buying at peaks and selling at bottoms, the opposite of profitable trading.
              </p>
              <div className="behavioral-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Following social media trends</li>
                  <li>Buying during FOMO moments</li>
                  <li>Panic selling during crashes</li>
                  <li>Copying others' trades</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Structure Analysis */}
      <section className="market-structure section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChartLine /> Market Structure Disadvantages
          </motion.h2>

          <motion.div 
            className="structure-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="structure-card" variants={fadeInUp}>
              <h3>Information Asymmetry</h3>
              <p>
                Professional traders and institutional investors have access to superior information, 
                research tools, and real-time data that retail traders lack.
              </p>
              <div className="structure-details">
                <strong>Professional Advantages:</strong>
                <ul>
                  <li>Bloomberg terminals and advanced analytics</li>
                  <li>Direct market access and faster execution</li>
                  <li>Research teams and analyst coverage</li>
                  <li>Insider information and market intelligence</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="structure-card" variants={fadeInUp}>
              <h3>High-Frequency Trading (HFT)</h3>
              <p>
                HFT firms use powerful computers and algorithms to execute trades in milliseconds, 
                giving them a massive advantage over human traders.
              </p>
              <div className="structure-details">
                <strong>HFT Advantages:</strong>
                <ul>
                  <li>Microsecond execution speeds</li>
                  <li>Co-location with exchanges</li>
                  <li>Advanced market making algorithms</li>
                  <li>Arbitrage opportunities</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="structure-card" variants={fadeInUp}>
              <h3>Transaction Costs</h3>
              <p>
                Commissions, spreads, and fees significantly reduce returns, making it harder for 
                retail traders to achieve profitability.
              </p>
              <div className="structure-details">
                <strong>Cost Factors:</strong>
                <ul>
                  <li>Brokerage commissions and fees</li>
                  <li>Bid-ask spreads</li>
                  <li>Slippage on large orders</li>
                  <li>Tax implications of frequent trading</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="research-conclusion section">
        <div className="container">
          <motion.div 
            className="conclusion-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Research Conclusion</h2>
            <p>
              The academic research and behavioral finance studies consistently demonstrate that 
              retail trading is extremely difficult and risky. The combination of psychological biases, 
              market structure disadvantages, and lack of professional resources creates an environment 
              where the vast majority of traders are destined to fail.
            </p>
            <p>
              <strong>The evidence is clear:</strong> Active trading is not a viable path to wealth 
              for most individuals. Instead, consider long-term, diversified investing strategies 
              that align with your financial goals and risk tolerance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;
