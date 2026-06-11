import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesEntry from '../components/home/ServicesEntry';
import ProcessFlow from '../components/home/ProcessFlow';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesEntry />
      <ProcessFlow />
      <FAQ />
    </>
  );
};

export default Home;
