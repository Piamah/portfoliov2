import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/404.scss';

const Error = () => {
    return (
        <div className="error-page">
            <Header />
            <p className="error">Oups! Il n'y a rien à voir par ici!</p>
            <Link to="/" className="back">Retourner à l’accueil</Link>
            <Footer />
        </div>
    );
};

export default Error;
