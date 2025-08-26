import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExclamationTriangle, FaChartLine, FaGraduationCap, FaShieldAlt, FaArrowDown, FaTimes, FaBars, FaBrain, FaUsers, FaChartBar, FaRocket, FaBook, FaLightbulb, FaSearch, FaCalculator, FaHistory, FaGlobe, FaChartPie, FaGraduationCap as FaGrad, FaHandshake, FaPiggyBank, FaHome, FaUniversity, FaHeart, FaPhone, FaUsers as FaGroup, FaCalendar, FaGlobe as FaWorld, FaBookOpen, FaHeadset, FaShieldAlt as FaProtection } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <FaExclamationTriangle />
            <span>NoHolyGrail</span>
          </div>
          
                     <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
             <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
             <button onClick={() => scrollToSection('introduction')} className="nav-link">Overview</button>
             <button onClick={() => scrollToSection('stats')} className="nav-link">Statistics</button>
             <button onClick={() => scrollToSection('analysis')} className="nav-link">Analysis</button>
             <button onClick={() => scrollToSection('research')} className="nav-link">Research</button>
             <button onClick={() => scrollToSection('behavioral')} className="nav-link">Psychology</button>
             <button onClick={() => scrollToSection('systemic')} className="nav-link">Systemic Risks</button>
             <button onClick={() => scrollToSection('addiction')} className="nav-link">Recovery</button>
             <button onClick={() => scrollToSection('alternatives')} className="nav-link">Alternatives</button>
             <button onClick={() => scrollToSection('implementation')} className="nav-link">Implementation</button>
             <button onClick={() => scrollToSection('resources')} className="nav-link">Resources</button>
           </div>
          
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <motion.div 
          className="hero-content"
          style={{ opacity, scale }}
        >
          <div className="hero-badge">
            <FaExclamationTriangle />
            <span>Critical Warning</span>
          </div>
          <h1 className="hero-title">
            The <span className="highlight">Harsh Reality</span> of Trading
          </h1>
                     <p className="hero-subtitle">
             99% of retail traders fail. Here's the comprehensive analysis of why trading markets are fundamentally stacked against individual investors.
           </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('stats')} className="btn btn-primary">
              See the Numbers
            </button>
            <button onClick={() => scrollToSection('warning')} className="btn btn-secondary">
              Read Warning
            </button>
          </div>
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
             </section>

       {/* Introduction Section */}
       <section id="introduction" className="introduction-section">
         <div className="container">
           <motion.div 
             className="introduction-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <h2>Executive Summary</h2>
             <p className="lead-paragraph">
               This comprehensive analysis examines the overwhelming evidence that retail trading is fundamentally flawed as a wealth-building strategy. Through extensive research of academic studies, market data, and behavioral finance literature, we present an evidence-based case for why 99% of individual traders fail to achieve consistent profitability.
             </p>
             
             <div className="key-findings">
               <h3>Key Findings</h3>
               <ul>
                 <li><strong>99% Failure Rate:</strong> The vast majority of retail traders lose money consistently over time</li>
                 <li><strong>Psychological Barriers:</strong> Human cognitive biases make rational trading nearly impossible</li>
                 <li><strong>Systemic Disadvantages:</strong> Retail traders compete against institutions with superior resources</li>
                 <li><strong>Market Structure:</strong> Current market conditions inherently favor professional traders</li>
                 <li><strong>Alternative Strategies:</strong> Proven investment approaches offer better risk-adjusted returns</li>
               </ul>
             </div>

             <div className="research-methodology">
               <h3>Research Methodology</h3>
               <p>
                 This analysis draws from peer-reviewed academic studies, behavioral finance research, 
                 market performance data, and institutional trading statistics. We examine both 
                 quantitative evidence (failure rates, performance metrics) and qualitative factors 
                 (psychological biases, market structure) to provide a comprehensive understanding 
                 of why trading fails for most individuals.
               </p>
             </div>
           </motion.div>
         </div>
       </section>

       {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="container">
                     <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             The Empirical Evidence: Trading Failure Statistics
           </motion.h2>
           
           <motion.p 
             className="section-intro"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             Multiple studies across different markets and time periods consistently demonstrate the same pattern: 
             the overwhelming majority of retail traders lose money. These statistics are not anecdotal—they 
             represent rigorous academic research and market analysis.
           </motion.p>
          
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-number">99%</div>
              <div className="stat-label">Failure Rate</div>
              <div className="stat-description">Of retail traders lose money consistently</div>
            </motion.div>

            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-number">80%</div>
              <div className="stat-label">Lose Money</div>
              <div className="stat-description">Within the first year of trading</div>
            </motion.div>

            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-number">6.5%</div>
              <div className="stat-label">Underperformance</div>
              <div className="stat-description">Annual underperformance vs buy & hold</div>
            </motion.div>

            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-number">95%</div>
              <div className="stat-label">Quit Within 2 Years</div>
              <div className="stat-description">Most traders abandon their strategy</div>
            </motion.div>
          </motion.div>
                 </div>
       </section>

       {/* Detailed Analysis Section */}
       <section id="analysis" className="analysis-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Deep Dive: Why These Numbers Are Inevitable
           </motion.h2>
           
           <motion.div 
             className="analysis-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div className="analysis-card">
               <h3><FaCalculator /> The Mathematics of Trading Failure</h3>
               <p>
                 Trading success requires overcoming multiple mathematical hurdles simultaneously. 
                 Consider that even with a 60% win rate (which is exceptional for retail traders), 
                 you need to maintain a positive risk-reward ratio of at least 1.5:1 just to break even 
                 after accounting for transaction costs, slippage, and taxes.
               </p>
               <p>
                 The probability of maintaining this performance over hundreds of trades is extremely low. 
                 Add in the psychological pressure of real money, and the mathematical odds become nearly impossible.
               </p>
             </div>

             <div className="analysis-card">
               <h3><FaHistory /> Historical Market Patterns</h3>
               <p>
                 Market history shows that periods of high retail trading activity often coincide with 
                 market tops and subsequent crashes. The 1929 crash, 2000 dot-com bubble, and 2008 
                 financial crisis all featured massive retail participation followed by devastating losses.
               </p>
               <p>
                 This pattern suggests that retail traders are more likely to enter markets at the wrong time, 
                 driven by media hype and fear of missing out, rather than sound investment principles.
               </p>
             </div>

             <div className="analysis-card">
               <h3><FaGlobe /> Global Market Evidence</h3>
               <p>
                 The failure of retail trading is not unique to any single market. Studies from the 
                 Tokyo Stock Exchange, London Stock Exchange, and various European markets all show 
                 similar patterns of retail trader underperformance.
               </p>
               <p>
                 This global consistency suggests that the problem is not market-specific but rather 
                 fundamental to the nature of retail trading itself.
               </p>
             </div>
           </motion.div>
         </div>
       </section>

               {/* Why Trading is Fundamentally Flawed Section */}
       <section id="reasons" className="reasons-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Why Trading is Fundamentally Flawed
           </motion.h2>
           
           <motion.p 
             className="section-intro"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             The problem isn't that traders fail—it's that the entire system is designed to ensure they fail. 
             Trading isn't a skill you can master; it's a rigged game where the house always wins.
           </motion.p>
           
           <motion.div 
             className="reasons-grid"
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
           >
             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaChartLine />
               </div>
               <h3>The Zero-Sum Game Reality</h3>
               <p>For every winner, there must be a loser. You're competing against professionals with billions in capital, supercomputers, and insider information. The odds are mathematically impossible.</p>
             </motion.div>

             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaExclamationTriangle />
               </div>
               <h3>Market Makers Always Win</h3>
               <p>Brokers and market makers profit from your losses through spreads, commissions, and fees. They have no incentive for you to succeed—your failure is their business model.</p>
             </motion.div>

             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaGraduationCap />
               </div>
               <h3>Information Asymmetry</h3>
               <p>Institutional traders have access to real-time data, research teams, and market-moving information. You're trading blind while they see the full picture.</p>
             </motion.div>

             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaShieldAlt />
               </div>
               <h3>Psychological Warfare</h3>
               <p>The market is designed to exploit human emotions. Fear, greed, and FOMO are systematically used against you. Even if you could be rational, the system prevents it.</p>
             </motion.div>

             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaCalculator />
               </div>
               <h3>Mathematical Impossibility</h3>
               <p>After fees, taxes, and slippage, you need to be right 60%+ of the time just to break even. The probability of maintaining this over hundreds of trades is virtually zero.</p>
             </motion.div>

             <motion.div className="reason-card" variants={fadeInUp}>
               <div className="reason-icon">
                 <FaHistory />
               </div>
               <h3>Historical Evidence</h3>
               <p>Decades of data prove that retail trading is a wealth destruction mechanism. The 99% failure rate isn't due to lack of skill—it's the system working as designed.</p>
             </motion.div>
           </motion.div>
                  </div>
        </section>

       {/* Academic Research Section */}
       <section id="research" className="research-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Academic Research: The Scientific Evidence
           </motion.h2>
           
           <motion.div 
             className="research-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div className="research-card">
               <h3><FaSearch /> Key Academic Studies</h3>
               <div className="study-item">
                 <h4>Barber & Odean (2000) - "Trading is Hazardous to Your Wealth"</h4>
                 <p>
                   This landmark study analyzed 66,465 households and found that individual investors 
                   underperformed the market by 6.5% annually. The study concluded that trading activity 
                   was directly correlated with poor performance.
                 </p>
               </div>
               
               <div className="study-item">
                 <h4>Barber & Odean (2001) - "Boys Will Be Boys"</h4>
                 <p>
                   This follow-up study found that men traded 45% more than women, resulting in 
                   significantly worse performance. The research demonstrated that overconfidence 
                   and excessive trading lead to poor returns.
                 </p>
               </div>
               
               <div className="study-item">
                 <h4>Jordan & Diltz (2003) - "Day Traders and the Disposition Effect"</h4>
                 <p>
                   This study examined day traders and found that 80% lost money within the first year, 
                   with only 1% achieving consistent profitability. The research highlighted the 
                   psychological barriers to successful trading.
                 </p>
               </div>
             </div>

             <div className="research-card">
               <h3><FaChartPie /> Behavioral Finance Insights</h3>
               <p>
                 Behavioral finance research has identified numerous cognitive biases that systematically 
                 work against traders: overconfidence, confirmation bias, loss aversion, and the 
                 disposition effect. These biases are hardwired into human psychology and cannot be 
                 easily overcome through education or experience.
               </p>
               <p>
                 Studies show that even professional traders struggle with these biases, suggesting 
                 that the problem is not lack of knowledge but fundamental human psychology.
               </p>
             </div>
           </motion.div>
         </div>
       </section>

       {/* Behavioral Psychology Section */}
      <section id="behavioral" className="behavioral-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Psychology of Trading Failure
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
              <h3>Emotional Decision-Making</h3>
              <p>Fear, greed, and anxiety drive impulsive choices. FOMO leads to chasing trends, panic triggers poor exits, and greed prompts over-leveraging.</p>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaRocket />
              </div>
              <h3>Overconfidence Bias</h3>
              <p>Many traders believe they have superior market insight, leading to riskier trades and poor risk management. This results in excessive trading and underestimation of threats.</p>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaUsers />
              </div>
              <h3>Herding Behavior</h3>
              <p>Traders copy others rather than doing their own research. This creates bubbles and market corrections as participants react to crowd sentiment instead of data.</p>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaChartBar />
              </div>
              <h3>Loss Aversion</h3>
              <p>Traders hate losses more than they value gains, causing them to hold losing positions too long or exit winners too early, undermining rational portfolio management.</p>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaBook />
              </div>
              <h3>Confirmation Bias</h3>
              <p>Focusing only on information that supports pre-existing views while ignoring contradictory evidence narrows perspective and perpetuates mistakes.</p>
            </motion.div>

            <motion.div className="behavioral-card" variants={fadeInUp}>
              <div className="behavioral-icon">
                <FaLightbulb />
              </div>
              <h3>Illusion of Control</h3>
              <p>Many believe their expertise can control outcomes in unpredictable markets, leading to overtrading and bigger risks than warranted.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Systemic Risks Section */}
      <section id="systemic" className="systemic-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Systemic Market Risks
          </motion.h2>
          
          <motion.div 
            className="systemic-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="systemic-card">
              <h3>High-Frequency Trading & Flash Crashes</h3>
              <p>Complex market interactions and tight coupling can lead to "flash crashes" and systemic accidents. Even high reliability practices in individual firms can paradoxically make overall market stability worse under certain conditions.</p>
            </div>

            <div className="systemic-card">
              <h3>Risk Management Breakdowns</h3>
              <p>When firms neglect risk controls in "hot markets," it can catalyze market-wide failures. Risk management breakdowns are especially dangerous during volatile periods.</p>
            </div>

            <div className="systemic-card">
              <h3>Market Structure Limitations</h3>
              <p>Some market conditions are inherently unfavorable for retail traders: short-lived investment opportunities, decentralized risk decisions, and high volatility with unpredictable liquidity create environments where most participants lose money over time.</p>
            </div>

            <div className="systemic-card">
              <h3>Institutional Advantages</h3>
              <p>Retail traders face unfair competition from institutions with better tools, real-time data, and resources. The playing field is fundamentally uneven, making success nearly impossible for the average trader.</p>
            </div>
          </motion.div>
                 </div>
       </section>

       {/* Trading Addiction Recovery Section */}
       <section id="addiction" className="addiction-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Trading Addiction Recovery: A 12-Step Program
           </motion.h2>
           
           <motion.p 
             className="section-intro"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             Trading addiction is a serious behavioral disorder that can destroy lives, relationships, and financial security. 
             This 12-step recovery program is modeled after successful addiction treatment programs and provides a structured 
             path to recovery for those struggling with compulsive trading.
           </motion.p>
           
           <motion.div 
             className="addiction-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div className="addiction-warning">
               <h3><FaExclamationTriangle /> Warning Signs of Trading Addiction</h3>
               <ul>
                 <li>Spending excessive time monitoring markets and charts</li>
                 <li>Neglecting work, family, or personal responsibilities</li>
                 <li>Borrowing money or using credit to fund trading</li>
                 <li>Lying about trading losses or hiding account statements</li>
                 <li>Experiencing withdrawal symptoms when not trading</li>
                 <li>Continuing to trade despite significant financial losses</li>
                 <li>Feeling euphoric during wins and depressed during losses</li>
                 <li>Failed attempts to stop or reduce trading activity</li>
               </ul>
             </div>

             <div className="steps-program">
               <h3><FaHeart /> The 12 Steps to Trading Recovery</h3>
               
               <div className="step-item">
                 <div className="step-number">1</div>
                 <div className="step-content">
                   <h4>Admit Powerlessness</h4>
                   <p>We admitted we were powerless over our trading addiction—that our lives had become unmanageable.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">2</div>
                 <div className="step-content">
                   <h4>Believe in Recovery</h4>
                   <p>Came to believe that a Power greater than ourselves could restore us to sanity.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">3</div>
                 <div className="step-content">
                   <h4>Turn Over Control</h4>
                   <p>Made a decision to turn our will and our lives over to the care of a higher power as we understood it.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">4</div>
                 <div className="step-content">
                   <h4>Moral Inventory</h4>
                   <p>Made a searching and fearless moral inventory of ourselves.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">5</div>
                 <div className="step-content">
                   <h4>Admit Wrongs</h4>
                   <p>Admitted to our higher power, to ourselves, and to another human being the exact nature of our wrongs.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">6</div>
                 <div className="step-content">
                   <h4>Ready for Change</h4>
                   <p>Were entirely ready to have our higher power remove all these defects of character.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">7</div>
                 <div className="step-content">
                   <h4>Humbly Ask</h4>
                   <p>Humbly asked our higher power to remove our shortcomings.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">8</div>
                 <div className="step-content">
                   <h4>Make Amends List</h4>
                   <p>Made a list of all persons we had harmed, and became willing to make amends to them all.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">9</div>
                 <div className="step-content">
                   <h4>Make Direct Amends</h4>
                   <p>Made direct amends to such people wherever possible, except when to do so would injure them or others.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">10</div>
                 <div className="step-content">
                   <h4>Continue Inventory</h4>
                   <p>Continued to take personal inventory and when we were wrong promptly admitted it.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">11</div>
                 <div className="step-content">
                   <h4>Spiritual Connection</h4>
                   <p>Sought through prayer and meditation to improve our conscious contact with our higher power.</p>
                 </div>
               </div>

               <div className="step-item">
                 <div className="step-number">12</div>
                 <div className="step-content">
                   <h4>Help Others</h4>
                   <p>Having had a spiritual awakening as the result of these steps, we tried to carry this message to other addicts and to practice these principles in all our affairs.</p>
                 </div>
               </div>
             </div>

             <div className="recovery-tips">
               <h3><FaProtection /> Practical Recovery Strategies</h3>
               <div className="tips-grid">
                 <div className="tip-card">
                   <h4>Account Closure</h4>
                   <p>Close all trading accounts and remove trading apps from your devices. This creates a physical barrier to relapse.</p>
                 </div>
                 <div className="tip-card">
                   <h4>Financial Counseling</h4>
                   <p>Seek professional financial counseling to address debt and create a realistic recovery plan.</p>
                 </div>
                 <div className="tip-card">
                   <h4>Support Groups</h4>
                   <p>Join Gamblers Anonymous or similar support groups that understand the nature of behavioral addictions.</p>
                 </div>
                 <div className="tip-card">
                   <h4>Therapy</h4>
                   <p>Consider cognitive behavioral therapy (CBT) to address underlying psychological issues.</p>
                 </div>
                 <div className="tip-card">
                   <h4>Accountability Partner</h4>
                   <p>Designate a trusted friend or family member as your accountability partner.</p>
                 </div>
                 <div className="tip-card">
                   <h4>Healthy Alternatives</h4>
                   <p>Replace trading with healthy activities like exercise, hobbies, or spending time with loved ones.</p>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

                             {/* Warning Section */}
        <section id="warning" className="warning-section">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="warning-video"
          >
            <source src="/117690-713035933_small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         <div className="container">
          <motion.div 
            className="warning-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="warning-header">
              <FaExclamationTriangle className="warning-icon" />
              <h2>Critical Warning</h2>
            </div>
            <div className="warning-content">
              <p className="warning-text">
                <strong>Trading is not a path to quick wealth.</strong> You're competing against:
              </p>
              <ul className="warning-list">
                <li>Professional traders with advanced algorithms</li>
                <li>Institutional investors with billions in capital</li>
                <li>High-frequency trading firms</li>
                <li>Market makers who control liquidity</li>
              </ul>
              <p className="warning-text">
                <strong>The odds are fundamentally stacked against you.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternatives Section */}
      <section id="alternatives" className="alternatives-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Better Alternatives
          </motion.h2>
          
          <motion.div 
            className="alternatives-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="alternative-card" variants={fadeInUp}>
              <h3>Index Investing</h3>
              <p>Low-cost, diversified exposure to broad market performance with proven long-term returns. ETFs and index funds provide market exposure without the risks of individual stock picking.</p>
            </motion.div>

            <motion.div className="alternative-card" variants={fadeInUp}>
              <h3>Dollar-Cost Averaging</h3>
              <p>Regular investments over time reduce timing risk and emotional decision-making. This systematic approach eliminates the need to predict market movements.</p>
            </motion.div>

            <motion.div className="alternative-card" variants={fadeInUp}>
              <h3>Education & Skills</h3>
              <p>Invest in yourself through education and skill development for better career opportunities. This provides a more reliable path to financial growth than trading.</p>
            </motion.div>

            <motion.div className="alternative-card" variants={fadeInUp}>
              <h3>Emergency Fund</h3>
              <p>Build financial security with 3-6 months of expenses in liquid savings. This provides protection against unexpected financial challenges.</p>
            </motion.div>

            <motion.div className="alternative-card" variants={fadeInUp}>
              <h3>Retirement Accounts</h3>
              <p>Maximize tax-advantaged retirement accounts like 401(k)s and IRAs. These provide compound growth benefits over decades.</p>
            </motion.div>

                         <motion.div className="alternative-card" variants={fadeInUp}>
               <h3>Real Estate</h3>
               <p>Consider real estate investment through REITs or direct ownership for diversification and potential income generation.</p>
             </motion.div>

             <motion.div className="alternative-card" variants={fadeInUp}>
               <h3>Bond Ladders</h3>
               <p>Create a bond ladder for predictable income and capital preservation, especially suitable for conservative investors.</p>
             </motion.div>

             <motion.div className="alternative-card" variants={fadeInUp}>
               <h3>Business Ownership</h3>
               <p>Consider starting or investing in small businesses, which can provide both income and potential for significant growth.</p>
             </motion.div>
          </motion.div>
                 </div>
       </section>

       {/* Implementation Guide Section */}
       <section id="implementation" className="implementation-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Practical Implementation: Building Wealth Without Trading
           </motion.h2>
           
           <motion.div 
             className="implementation-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div className="implementation-card">
               <h3><FaPiggyBank /> Step 1: Emergency Fund Foundation</h3>
               <p>
                 Before any investment, build a solid emergency fund covering 3-6 months of expenses. 
                 This provides financial security and prevents the need to liquidate investments during market downturns.
               </p>
               <ul>
                 <li>Start with $1,000 emergency fund</li>
                 <li>Gradually build to 3-6 months of expenses</li>
                 <li>Keep in high-yield savings account</li>
                 <li>Only use for true emergencies</li>
               </ul>
             </div>

             <div className="implementation-card">
               <h3><FaUniversity /> Step 2: Maximize Retirement Accounts</h3>
               <p>
                 Take full advantage of tax-advantaged retirement accounts. These provide the best 
                 long-term wealth-building opportunities with significant tax benefits.
               </p>
               <ul>
                 <li>Contribute maximum to 401(k) if available</li>
                 <li>Open and fund IRA (Traditional or Roth)</li>
                 <li>Consider employer matching as free money</li>
                 <li>Use target-date funds for simplicity</li>
               </ul>
             </div>

             <div className="implementation-card">
               <h3><FaChartLine /> Step 3: Index Fund Strategy</h3>
               <p>
                 Implement a simple, low-cost index fund strategy. This provides broad market exposure 
                 with minimal fees and maximum diversification.
               </p>
               <ul>
                 <li>Choose low-cost index funds (VTI, VXUS, BND)</li>
                 <li>Set up automatic monthly contributions</li>
                 <li>Maintain 60/40 stock/bond allocation</li>
                 <li>Rebalance annually, not more frequently</li>
               </ul>
             </div>

             <div className="implementation-card">
               <h3><FaHandshake /> Step 4: Dollar-Cost Averaging</h3>
               <p>
                 Invest regularly regardless of market conditions. This systematic approach eliminates 
                 timing risk and reduces emotional decision-making.
               </p>
               <ul>
                 <li>Set up automatic monthly investments</li>
                 <li>Increase contributions with raises</li>
                 <li>Never try to time the market</li>
                 <li>Focus on consistency over perfection</li>
               </ul>
             </div>
           </motion.div>
         </div>
       </section>

       {/* Conclusion Section */}
      <section className="conclusion-section">
        <div className="container">
          <motion.div 
            className="conclusion-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                         <h2>The Bottom Line</h2>
             <p>
               Trading is not a skill you can learn or a game you can win. It's a sophisticated 
               wealth extraction system designed to transfer money from retail investors to 
               institutions, brokers, and market makers.
             </p>
             <p>
               The 99% failure rate isn't a bug—it's a feature. The system is working exactly 
               as intended. Your losses are someone else's profits. Stop playing a rigged game 
               where the house always wins.
             </p>
            <div className="conclusion-stats">
              <div className="conclusion-stat">
                <span className="conclusion-number">99%</span>
                <span className="conclusion-label">Failure Rate</span>
              </div>
              <div className="conclusion-stat">
                <span className="conclusion-number">95%</span>
                <span className="conclusion-label">Quit Within 2 Years</span>
              </div>
              <div className="conclusion-stat">
                <span className="conclusion-number">1%</span>
                <span className="conclusion-label">Long-term Success</span>
              </div>
            </div>
                         <p className="conclusion-final">
               <strong>Stop playing the rigged game. Your money is better spent anywhere else.</strong>
             </p>
          </motion.div>
                 </div>
       </section>

       {/* Resources Section */}
       <section id="resources" className="resources-section">
         <div className="container">
           <motion.h2 
             className="section-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             Resources for Recovering Traders
           </motion.h2>
           
           <motion.p 
             className="section-intro"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             If you're struggling with trading addiction or need support in your recovery journey, 
             these resources can provide immediate help and long-term support.
           </motion.p>
           
           <motion.div 
             className="resources-content"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div className="resources-grid">
               <div className="resource-category">
                 <h3><FaPhone /> Crisis Helplines</h3>
                 <div className="resource-item">
                   <h4>National Problem Gambling Helpline</h4>
                   <p><strong>1-800-522-4700</strong> - 24/7 confidential support for gambling addiction</p>
                 </div>
                 <div className="resource-item">
                   <h4>National Suicide Prevention Lifeline</h4>
                   <p><strong>988</strong> - If you're having thoughts of suicide, help is available 24/7</p>
                 </div>
                 <div className="resource-item">
                   <h4>Crisis Text Line</h4>
                   <p><strong>Text HOME to 741741</strong> - Free, 24/7 crisis counseling via text</p>
                 </div>
               </div>

               <div className="resource-category">
                 <h3><FaGroup /> Support Groups</h3>
                 <div className="resource-item">
                   <h4>Gamblers Anonymous</h4>
                   <p>12-step program for gambling addiction recovery. Find local meetings at <strong>gamblersanonymous.org</strong></p>
                 </div>
                 <div className="resource-item">
                   <h4>Gam-Anon</h4>
                   <p>Support group for family and friends of problem gamblers</p>
                 </div>
                 <div className="resource-item">
                   <h4>Online Support Communities</h4>
                   <p>Reddit r/problemgambling and other online forums for peer support</p>
                 </div>
               </div>

               <div className="resource-category">
                 <h3><FaHeadset /> Professional Help</h3>
                 <div className="resource-item">
                   <h4>Financial Counselors</h4>
                   <p>National Foundation for Credit Counseling (NFCC) - <strong>nfcc.org</strong></p>
                 </div>
                 <div className="resource-item">
                   <h4>Addiction Therapists</h4>
                   <p>Psychology Today therapist finder - <strong>psychologytoday.com</strong></p>
                 </div>
                 <div className="resource-item">
                   <h4>Financial Planners</h4>
                   <p>Certified Financial Planner Board - <strong>letsmakeaplan.org</strong></p>
                 </div>
               </div>

               <div className="resource-category">
                 <h3><FaBookOpen /> Educational Resources</h3>
                 <div className="resource-item">
                   <h4>Books on Recovery</h4>
                   <ul>
                     <li>"The Easy Way to Stop Gambling" by Allen Carr</li>
                     <li>"Addiction by Design" by Natasha Dow Schüll</li>
                     <li>"The Biology of Desire" by Marc Lewis</li>
                   </ul>
                 </div>
                 <div className="resource-item">
                   <h4>Online Courses</h4>
                   <p>Financial literacy courses from Khan Academy and Coursera</p>
                 </div>
                 <div className="resource-item">
                   <h4>Podcasts</h4>
                   <p>"The Minimalists" and "ChooseFI" for financial independence education</p>
                 </div>
               </div>

               <div className="resource-category">
                 <h3><FaWorld /> Online Tools</h3>
                 <div className="resource-item">
                   <h4>Account Blocking Software</h4>
                   <p>Gamban, BetBlocker, and similar tools to block trading websites</p>
                 </div>
                 <div className="resource-item">
                   <h4>Financial Tracking Apps</h4>
                   <p>Mint, YNAB, and Personal Capital for budgeting and financial planning</p>
                 </div>
                 <div className="resource-item">
                   <h4>Meditation Apps</h4>
                   <p>Headspace, Calm, and Insight Timer for stress management</p>
                 </div>
               </div>

               <div className="resource-category">
                 <h3><FaCalendar /> Recovery Programs</h3>
                 <div className="resource-item">
                   <h4>Inpatient Treatment</h4>
                   <p>Professional addiction treatment centers specializing in behavioral addictions</p>
                 </div>
                 <div className="resource-item">
                   <h4>Outpatient Programs</h4>
                   <p>Intensive outpatient programs (IOP) for addiction recovery</p>
                 </div>
                 <div className="resource-item">
                   <h4>Aftercare Services</h4>
                   <p>Ongoing support and relapse prevention programs</p>
                 </div>
               </div>
             </div>

             <div className="emergency-notice">
               <h3><FaExclamationTriangle /> Emergency Notice</h3>
               <p>
                 <strong>If you're in immediate crisis:</strong> Call 911 or go to your nearest emergency room. 
                 If you're having thoughts of suicide, call the National Suicide Prevention Lifeline at 988 
                 or text HOME to 741741 to reach the Crisis Text Line. Help is available 24/7.
               </p>
             </div>
           </motion.div>
         </div>
       </section>

       {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 NoHolyGrail. Educational content only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
