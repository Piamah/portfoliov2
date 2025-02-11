import React from 'react';
import '../styles/mentions-legales.scss';

const MentionsLegales = () => {
    return (
        <div className="mentions-legales">
            <h1>Mentions Légales</h1>

            <h2>1. Éditeur du site</h2>
            <p>
                Le présent site web, accessible à l'adresse https://athenais-lecomte.netlify.app/ est édité par :
                <br />
                <strong>Nom :</strong> Athénaïs Lecomte
                <br />
                <strong>Statut :</strong> Personne physique
                <br />
                <strong>Email :</strong> athelec@gmail.com
                <br />
            </p>

            <h2>2. Hébergeur du site</h2>
            <p>
                Le site est hébergé par :
                <br />
                <strong>Nom de l’hébergeur :</strong> Netlify
                <br />
                <strong>Adresse :</strong> https://www.netlify.com
                <br />
                <strong>Téléphone :</strong> +1 415-418-2600
                <br />
                <strong>Adresse du siège social :</strong> 1100 2nd Street, Suite 200, San Francisco, CA 94158, USA
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
                Le contenu du site https://athenais-lecomte.netlify.app/, notamment les textes, images, graphiques, logos, vidéos, ainsi que leur agencement, sont protégés par le droit d'auteur. Toute reproduction, représentation, modification, publication ou distribution de ces éléments, sans l'autorisation préalable et écrite de l'éditeur, est interdite.
            </p>

            <h2>4. Protection des données personnelles</h2>
            <p>
                Ce site est un portfolio et ne collecte aucune donnée personnelle automatiquement. Toutefois, si vous choisissez de me contacter via les moyens mis à disposition sur le site (par exemple par e-mail), vous serez amené(e) à fournir certaines informations personnelles, telles que votre nom et votre adresse e-mail.
                <br />
                Ces informations sont uniquement utilisées pour répondre à votre demande. Je m'engage à ne pas utiliser ces données à d'autres fins et à les conserver uniquement le temps nécessaire pour la gestion de votre demande.
                <br />
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, vous pouvez me contacter à l'adresse suivante : athelec@gmail.com
            </p>

            <h2>5. Cookies</h2>
            <p>
                Ce site ne collecte ni n'utilise de cookies. Aucune donnée de navigation n'est enregistrée ni utilisée à des fins d'analyse ou de personnalisation de l'expérience utilisateur.
            </p>

            <h2>6. Limitation de responsabilité</h2>
            <p>
                L'éditeur du site met tout en œuvre pour offrir des informations fiables et à jour, mais ne saurait être tenu responsable des erreurs, omissions ou de l'absence de disponibilité des informations. L'utilisateur du site reconnaît utiliser ces informations sous sa propre responsabilité.
            </p>
        </div>
    );
};

export default MentionsLegales;
