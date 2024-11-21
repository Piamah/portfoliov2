import React from "react";
import "../styles/Cards.scss";
import Card from "./Card";

import imageP1 from '../assets/booki.webp'
import imageP2 from '../assets/bluel.webp'
import imageP3 from '../assets/carducci.webp'
import imageP4 from '../assets/kasa.webp'
import imageP5 from '../assets/vieux_grimoire.webp'

const Cards = () => {
    const projects = [
        { id: 1, title: "Projet 1 - Site d'une agence de voyage", image: imageP1, link: "https://github.com/Piamah/projet_2.git" },
        { id: 2, title: "Projet 2 - Création d'un portfolio", image: imageP2, link: "https://github.com/Piamah/Portfolio-architecte-sophie-bluel.git" },
        { id: 3, title: "Projet 3 - Optimisation d'un site", image: imageP3, link: "https://github.com/Piamah/piama.github.io.git" },
        { id: 4, title: "Projet 4 - Création d'une application web", image: imageP4, link: "https://github.com/Piamah/projet_5.git" },
        { id: 5, title: "Projet 5 - Développement du backend d'un site", image: imageP5, link: "https://github.com/Piamah/projet_6.git" },
    ];

    return (
        <div className="card-list">
            {projects.map((project) => (
                <Card
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default Cards;
