import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="google-fonts"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;700&display=swap"
        />,
    ]);
};
