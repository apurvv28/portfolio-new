'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Experiences from '../../components/Experiences';
import Projects from '../../components/Projects';
import TechStack from '../../components/TechStack';
import EventPlanning from '../../components/EventPlanning';
import Education from '@/app/components/Education';
import ResponsibilityCard from '@/app/components/ResponsibilityCard';
import Footer from '@/app/components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experiences />
        <Projects />
        <TechStack />
        <EventPlanning />
        <ResponsibilityCard />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
