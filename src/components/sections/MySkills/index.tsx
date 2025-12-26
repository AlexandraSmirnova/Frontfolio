import React from 'react';

import styles from './styles.css';
import { Title } from '../../Title';
import skillsJson from '../../../dataMocks/skills.json';
import { SkillsBubbles } from '../../SkillsBubbles';

export const MySkills: React.FC = () => {
    return (
        <section className={styles.container} id="skills">
            <Title text={'> Мои навыки'}/>
            <SkillsBubbles skills={skillsJson.skills} />
        </section>
    );
};
