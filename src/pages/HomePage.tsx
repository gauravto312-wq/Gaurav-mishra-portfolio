import React from 'react';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { MyThinking } from '../components/MyThinking';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <FeaturedProjects />
      <MyThinking />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
};
