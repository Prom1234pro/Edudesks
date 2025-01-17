import Link from 'next/link';
import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footer}>
    
    <Image
            src="/icons/logo.svg"
            alt="Edudesk Logo"
            className={styles.logoIcon}
            width={10}
            height={10}
            priority
          />
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/#features">Features</Link>
      </li>
      <li>
        <Link href="/pricing-plan">Pricing</Link>
      </li>
      <li>
        <Link href="mailto:edudesks@outlook.com">Contact us</Link>
      </li>
      <li>
        <Link href="/terms-of-service">Terms of service</Link>
      </li>
      <li>
        <Link href="/privacy-policy">Privacy policy</Link>
      </li>
    </ul>
    <div className={styles.hLine} />
    <div className={styles.footerBottom}>
      <p>© 2024 Edudesks. All rights reserved</p>
      <div className={styles.socials}>
        <Link target="_blank" 
          rel="noopener noreferrer"
          href="https://www.instagram.com/edudesks/profilecard/?igsh=dnZiOWR5ZTNseXl2"
          className={styles.socialItem}>
          <Image
          src={"/icons/instagram.svg"}
          alt="Arrow Icon"
          className={styles.arrowIcon}
          width={25}
          height={10}
        />
          {/* <img src={instagram} alt="" /> */}
        </Link>
        <Link href="" className={styles.socialItem}>
          <Image
            src={"/icons/twitter.svg"}
            alt="Arrow Icon"
            className={styles.arrowIcon}
            width={25}
            height={10}
          />
          {/* <img src={twitter} alt="" /> */}
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/edudesks/"
          className={styles.socialItem}>
          <Image
            src={"/icons/linkedin.svg"}
            alt="Arrow Icon"
            className={styles.arrowIcon}
            width={25}
            height={10}
          />
          {/* <img src={linkedin} alt="" /> */}
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
