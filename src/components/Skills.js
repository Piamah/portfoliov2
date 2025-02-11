import React from 'react';
import '../styles/Skills.scss'


const Skills = () => {
    return (
        <section className='skillsContent'>
            <div className='codeContent'>
                <h1>Back-end :</h1>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>Django</p>
                <p>GraphQL</p>

            </div>
            <div className='graphSkills'>
                <p>Back-end</p>
                <p>Front-end</p>
            </div>
            <div className='designerContent'>
                <h1>Front-end :</h1>
                <p>HTML</p>
                <p>CSS - SCSS</p>
                <p>Vue.js</p>
                <p>Next.js</p>
                <p>React</p>
                <p>Figma</p>

            </div>
        </section>
    );

}

export default Skills;