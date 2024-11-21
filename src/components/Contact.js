import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <h3>Et si on discutait ?</h3>
            <p>Une question ou un projet en tête? N'hésitez pas et envoyez moi un message.</p>
            <p>Je ferai de mon mieux pour répondre le plus vite possible!</p>
            <a className="email" href="mailto:athelec@gmail.com" rel="noopener noreferrer" target="_blank">Say hi!</a>
        </section>
    );

};

export default Contact;