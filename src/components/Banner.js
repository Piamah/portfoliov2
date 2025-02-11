import React, { useContext } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/Banner.scss";
import { ThemeContext } from "../context/ThemeContext";

const Banner = () => {
    const { isDark } = useContext(ThemeContext) || { isDark: false };

    // Récupération des images via GraphQL
    const data = useStaticQuery(graphql`
        query {
            lightImage: file(relativePath: { eq: "light_version.webp" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            darkImage: file(relativePath: { eq: "night_version.webp" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    `);

    // Choix image
    const currentImage = isDark
        ? getImage(data.darkImage?.childImageSharp)
        : getImage(data.lightImage?.childImageSharp);


    // console.log("Current image:", currentImage);
    // console.log("Images sources:", currentImage?.images?.fallback?.src);

    return (
        <div className="banner">
            <GatsbyImage
                className="banner-content"
                image={currentImage}
                alt="Athénaïs bannière"
            />
        </div>
    );
};

export default Banner;
