import React from 'react';
import '../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Separator from '../components/Separator';
import Skills from '../components/Skills';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Socials from '../components/Socials';
import Toggle from '../components/Toggle.js';
import { ThemeProvider } from "../context/ThemeContext.js";
import { Helmet } from "react-helmet";
import '../multiLang'

export default function Home() {
  return (
    <div id="main">
      <ThemeProvider>
        <Helmet>
          <html lang="fr" />
          <title>Athénaïs Lecomte</title>
          <meta name="description" content="Portfolio d'Athénaïs Lecomte', développeur web." />
        </Helmet>

        <section id="header-section">
          <Header />
          <Toggle />
        </section>
        <section id="about-section">
          <Banner />
        </section>
        <section id="skills-section">
          <Separator text="Compétences" />
          <Skills />
        </section>
        <section id="project-section">
          <Separator text="Projets" />
          <Cards />
        </section>
        <section id="contact-section">
          <Separator text="Contact" />
          <Contact />
        </section>
        <Socials />
        <Footer />
      </ThemeProvider>,
    </div>
  );
}
