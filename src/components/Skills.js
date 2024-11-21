import React from 'react';
import '../styles/Skills.scss'


const Skills = () => {
    return (
        <section className='skillsContent'>
            <div className='codeContent'>
                <h1>Back-end :</h1>
                <p>JS</p>
                <p>Node.js - Express</p>
                <p>React</p>
                <p>MongoDB</p>
                <p>etc</p>

            </div>
            <div className='graphSkills'></div>
            <div className='designerContent'>
                <h1>Front-end :</h1>
                <p>CSS/SCSS</p>
                <p>Figma</p>
                <p>etc</p>

            </div>
        </section>
    );

}

export default Skills;