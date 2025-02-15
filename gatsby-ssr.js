import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <meta
            key="google-site-verification"
            name="google-site-verification"
            content="II_LbYqDDZTEXdh4FzvYNuGS92gzsauEOEhB98kUb8E"
        />,
        <link
            key="google-fonts"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;700&display=swap"
        />,
    ]);
};
