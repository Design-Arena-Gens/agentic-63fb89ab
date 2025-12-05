'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>BuzzWorthy Studio</div>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Turn Vision into Value</h1>
          <p className={styles.heroSubtitle}>
            We craft digital experiences that drive results
          </p>
          <button className={styles.ctaButton}>Let's Talk</button>
        </div>
        <div className={styles.hexPattern}></div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.aboutText}>
            BuzzWorthy Studio is a web design and digital marketing agency that
            specializes in creating innovative digital experiences. We combine
            creativity with strategy to help businesses grow online.
          </p>
        </div>
      </section>

      {/* Core Rules / Attitude Section */}
      <section className={styles.attitude}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Attitude</h2>
          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <div className={styles.ruleNumber}>01</div>
              <h3>Innovation First</h3>
              <p>We push boundaries to create unique solutions</p>
            </div>
            <div className={styles.ruleCard}>
              <div className={styles.ruleNumber}>02</div>
              <h3>Client Focus</h3>
              <p>Your success is our priority</p>
            </div>
            <div className={styles.ruleCard}>
              <div className={styles.ruleNumber}>03</div>
              <h3>Quality Design</h3>
              <p>Every pixel matters in our work</p>
            </div>
            <div className={styles.ruleCard}>
              <div className={styles.ruleNumber}>04</div>
              <h3>Data Driven</h3>
              <p>Decisions backed by analytics and insights</p>
            </div>
            <div className={styles.ruleCard}>
              <div className={styles.ruleNumber}>05</div>
              <h3>Continuous Growth</h3>
              <p>Always learning and improving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className={styles.metrics}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Performance That Speaks</h2>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>34%</div>
              <div className={styles.metricLabel}>Bounce Rate</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>20K</div>
              <div className={styles.metricLabel}>Sign-ups</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>82%</div>
              <div className={styles.metricLabel}>Bookings Increase</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>396%</div>
              <div className={styles.metricLabel}>Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className={styles.awards}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <div className={styles.awardCount}>8×</div>
              <div className={styles.awardName}>Awwwards</div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardCount}>9×</div>
              <div className={styles.awardName}>CSS Design Awards</div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardCount}>3×</div>
              <div className={styles.awardName}>The FWA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Website Design</h3>
              <p>Beautiful, user-friendly designs that convert</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Motion Design</h3>
              <p>Engaging animations and interactive experiences</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Front-end Development</h3>
              <p>Clean, responsive code that performs</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Back-end Development</h3>
              <p>Robust server solutions and APIs</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Shopify Development</h3>
              <p>E-commerce solutions that drive sales</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Digital Marketing</h3>
              <p>SEO, advertising, and growth strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>BuzzWorthy Studio</h3>
              <p>Turn Vision into Value</p>
              <p className={styles.address}>
                81 Prospect St, Suite 9069<br />
                Brooklyn, NY 11201
              </p>
            </div>
            <div className={styles.footerSection}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Behance">Behance</a>
                <a href="#" aria-label="Dribbble">Dribbble</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 BuzzWorthy Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
