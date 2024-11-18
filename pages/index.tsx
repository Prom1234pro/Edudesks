// pages/index.tsx
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/LandingPageComponents/NavBar';
import Hero from '@/components/LandingPageComponents/Hero';
import TrustedSection from '@/components/LandingPageComponents/TrustedSection';
import CallActionOne from '@/components/LandingPageComponents/CallActionOne';
import Features from '@/components/LandingPageComponents/Features';
import CallActionTwo from '@/components/LandingPageComponents/CallActionTwo';
// import Plans from '@/components/LandingPageComponents/Plans';
import HowItWorks from '@/components/LandingPageComponents/HowItWorks';
import FaqSection from '@/components/LandingPageComponents/FaqSection';
import Footer from '@/components/LandingPageComponents/Footer';
import TakeControl from '@/components/LandingPageComponents/TakeControl';
import styles from '@/styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('landingPageLoaded');

    if (hasLoadedBefore) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('landingPageLoaded', 'true');
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.landingPage}>
      <Navbar />
      <Hero />
      <TrustedSection />
      <CallActionOne />
      <Features />
      <CallActionTwo />
      <HowItWorks />
      <FaqSection />
      <TakeControl />
      <Footer />
    </div>
  );
};

export default LandingPage;
