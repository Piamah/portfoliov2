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
import { ThemeProvider } from "../context/ThemeContext.js";
import { Helmet } from "react-helmet";
import '../multiLang'

export default function Home() {
  return (
    <div id="main">
      <ThemeProvider>
        <Helmet>
          <html lang="fr" />
          <title>Athénaïs Lecomte  - Développeur Web - Portfolio</title>

          <meta name="description" content="Portfolio d'Athénaïs Lecomte', développeur web : mes projets et mes compétences." />
          <meta name='keywords' content='portfolio, athenais lecomte, développeur, projets, compétences' />
          <meta name="google-site-verification" content="II_LbYqDDZTEXdh4FzvYNuGS92gzsauEOEhB98kUb8E" />

          <meta property="og:title" content="Athénaïs Lecomte  - Développeur Web - Portfolio" />
          <meta property="og:description" content="Portfolio d'Athénaïs Lecomte', développeur web : mes projets et mes compétences." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://athenais-lecomte.netlify.app/" />
          <meta property="og:locale" content="fr_FR" />

          <meta name="twitter:title" content="Athénaïs Lecomte  - Développeur Web - Portfolio" />
          <meta name="twitter:description" content="Portfolio d'Athénaïs Lecomte', développeur web : mes projets et mes compétences." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://athenais-lecomte.netlify.app/" />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Développeur web",
              "description": "Développeur web",
              "url": "https://athenais-lecomte.netlify.app/",
              "employee": {
                "@type": "Person",
                "name": "Athénaïs Lecomte",
                "jobTitle": "Développeur Web"
              }
            })}
          </script>
        </Helmet>
        <section id="header-section">
          <Header />
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
        <section id="social-section">
          <Socials />
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
