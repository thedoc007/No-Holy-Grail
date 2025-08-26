import React from 'react';
import { motion } from 'framer-motion';
import { FaPiggyBank, FaChartLine, FaGraduationCap, FaShieldAlt, FaCalculator, FaHandshake } from 'react-icons/fa';
import './Alternatives.css';

const Alternatives = () => {
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
    <div className="alternatives">
      {/* Header Section */}
      <section className="alternatives-header section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Safer Investment Alternatives</h1>
            <p className="page-subtitle">
              Proven strategies for building wealth without the risks of active trading
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="investment-strategies section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChartLine /> Long-Term Investment Strategies
          </motion.h2>

          <motion.div 
            className="strategies-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="strategy-card" variants={fadeInUp}>
              <div className="strategy-icon">
                <FaPiggyBank />
              </div>
              <h3>Index Fund Investing</h3>
              <p>
                Invest in low-cost index funds that track major market indices like the S&P 500. 
                This approach provides broad diversification and historically consistent returns.
              </p>
              <div className="strategy-benefits">
                <strong>Benefits:</strong>
                <ul>
                  <li>Low fees and expenses</li>
                  <li>Broad market diversification</li>
                  <li>Historically proven returns</li>
                  <li>Minimal time commitment</li>
                  <li>Reduced emotional decision-making</li>
                </ul>
              </div>
              <div className="strategy-example">
                <strong>Example:</strong>
                <p>Vanguard S&P 500 ETF (VOO) or Fidelity 500 Index Fund (FXAIX)</p>
              </div>
            </motion.div>

            <motion.div className="strategy-card" variants={fadeInUp}>
              <div className="strategy-icon">
                <FaShieldAlt />
              </div>
              <h3>Dollar-Cost Averaging</h3>
              <p>
                Invest a fixed amount regularly regardless of market conditions. This strategy 
                reduces the impact of market volatility and emotional decision-making.
              </p>
              <div className="strategy-benefits">
                <strong>Benefits:</strong>
                <ul>
                  <li>Reduces market timing risk</li>
                  <li>Automates investment process</li>
                  <li>Buys more shares when prices are low</li>
                  <li>Builds consistent savings habits</li>
                  <li>Reduces emotional investing</li>
                </ul>
              </div>
              <div className="strategy-example">
                <strong>Example:</strong>
                <p>Invest $500 monthly in a diversified portfolio regardless of market conditions</p>
              </div>
            </motion.div>

            <motion.div className="strategy-card" variants={fadeInUp}>
              <div className="strategy-icon">
                <FaCalculator />
              </div>
              <h3>Asset Allocation</h3>
              <p>
                Diversify your portfolio across different asset classes (stocks, bonds, real estate) 
                based on your age, risk tolerance, and financial goals.
              </p>
              <div className="strategy-benefits">
                <strong>Benefits:</strong>
                <ul>
                  <li>Reduces portfolio risk</li>
                  <li>Captures returns from different markets</li>
                  <li>Customizable to individual needs</li>
                  <li>Reduces correlation between investments</li>
                  <li>Provides stability during market downturns</li>
                </ul>
              </div>
              <div className="strategy-example">
                <strong>Example:</strong>
                <p>60% stocks, 30% bonds, 10% real estate for moderate risk tolerance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section className="financial-planning section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap /> Comprehensive Financial Planning
          </motion.h2>

          <motion.div 
            className="planning-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="planning-card" variants={fadeInUp}>
              <h3>Emergency Fund</h3>
              <p>
                Build an emergency fund covering 3-6 months of living expenses before investing. 
                This provides financial security and prevents the need to sell investments during emergencies.
              </p>
              <div className="planning-steps">
                <strong>Steps:</strong>
                <ol>
                  <li>Calculate your monthly expenses</li>
                  <li>Set a target of 3-6 months of expenses</li>
                  <li>Save in a high-yield savings account</li>
                  <li>Automate monthly contributions</li>
                </ol>
              </div>
            </motion.div>

            <motion.div className="planning-card" variants={fadeInUp}>
              <h3>Debt Management</h3>
              <p>
                Prioritize paying off high-interest debt before investing. The interest on debt 
                often exceeds potential investment returns, making debt reduction a better use of funds.
              </p>
              <div className="planning-steps">
                <strong>Strategy:</strong>
                <ol>
                  <li>List all debts with interest rates</li>
                  <li>Pay off highest interest debt first</li>
                  <li>Consider debt consolidation</li>
                  <li>Avoid taking on new debt</li>
                </ol>
              </div>
            </motion.div>

            <motion.div className="planning-card" variants={fadeInUp}>
              <h3>Retirement Planning</h3>
              <p>
                Maximize contributions to tax-advantaged retirement accounts like 401(k)s and IRAs. 
                These accounts provide tax benefits and compound growth over decades.
              </p>
              <div className="planning-steps">
                <strong>Priorities:</strong>
                <ol>
                  <li>Contribute to employer 401(k) match</li>
                  <li>Maximize IRA contributions</li>
                  <li>Consider Roth vs Traditional</li>
                  <li>Increase contributions over time</li>
                </ol>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Vehicles Section */}
      <section className="investment-vehicles section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHandshake /> Recommended Investment Vehicles
          </motion.h2>

          <motion.div 
            className="vehicles-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="vehicle-card" variants={fadeInUp}>
              <h3>Exchange-Traded Funds (ETFs)</h3>
              <div className="vehicle-content">
                <p>
                  ETFs provide instant diversification and low costs. They trade like stocks 
                  but provide exposure to entire markets or sectors.
                </p>
                <div className="vehicle-examples">
                  <strong>Popular Examples:</strong>
                  <ul>
                    <li>Vanguard Total Stock Market ETF (VTI)</li>
                    <li>SPDR S&P 500 ETF (SPY)</li>
                    <li>iShares Core Total U.S. Bond Market ETF (AGG)</li>
                    <li>Vanguard Total International Stock ETF (VXUS)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="vehicle-card" variants={fadeInUp}>
              <h3>Target-Date Funds</h3>
              <div className="vehicle-content">
                <p>
                  These funds automatically adjust asset allocation based on your target retirement date. 
                  They become more conservative as you approach retirement.
                </p>
                <div className="vehicle-examples">
                  <strong>Popular Examples:</strong>
                  <ul>
                    <li>Vanguard Target Retirement Funds</li>
                    <li>Fidelity Freedom Funds</li>
                    <li>T. Rowe Price Retirement Funds</li>
                    <li>American Funds Target Date Retirement Series</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="vehicle-card" variants={fadeInUp}>
              <h3>Robo-Advisors</h3>
              <div className="vehicle-content">
                <p>
                  Automated investment platforms that create and manage diversified portfolios 
                  based on your goals and risk tolerance.
                </p>
                <div className="vehicle-examples">
                  <strong>Popular Platforms:</strong>
                  <ul>
                    <li>Betterment</li>
                    <li>Wealthfront</li>
                    <li>Vanguard Personal Advisor Services</li>
                    <li>Fidelity Go</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Principles Section */}
      <section className="success-principles section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap /> Key Success Principles
          </motion.h2>

          <motion.div 
            className="principles-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Start Early</h3>
              <p>
                The power of compound interest means that starting to invest early is more important 
                than the amount you invest. Time in the market beats timing the market.
              </p>
            </motion.div>

            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Stay Consistent</h3>
              <p>
                Regular, consistent investing over time is more effective than trying to time the market 
                or making large lump-sum investments.
              </p>
            </motion.div>

            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Keep Costs Low</h3>
              <p>
                High fees and expenses can significantly reduce your returns over time. 
                Choose low-cost investment options and avoid unnecessary trading.
              </p>
            </motion.div>

            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Diversify</h3>
              <p>
                Don't put all your eggs in one basket. Diversification across different asset classes 
                and geographies reduces risk and improves long-term returns.
              </p>
            </motion.div>

            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Think Long-Term</h3>
              <p>
                Focus on long-term goals rather than short-term market movements. 
                Successful investing requires patience and discipline.
              </p>
            </motion.div>

            <motion.div className="principle-card" variants={fadeInUp}>
              <h3>Educate Yourself</h3>
              <p>
                Continuously learn about investing and personal finance. Knowledge is your best 
                defense against poor financial decisions and scams.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="alternatives-cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Start Your Financial Journey Today</h2>
            <p>
              Building wealth doesn't require complex trading strategies or market timing. 
              Simple, proven approaches like index fund investing and dollar-cost averaging 
              have helped millions of people achieve their financial goals.
            </p>
            <div className="cta-steps">
              <strong>Next Steps:</strong>
              <ol>
                <li>Build an emergency fund</li>
                <li>Pay off high-interest debt</li>
                <li>Start investing in low-cost index funds</li>
                <li>Automate your investments</li>
                <li>Stay the course and be patient</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alternatives;
