import React from 'react';

import styles from './styles.css';
import { Title } from '../../Title';
import skillsJson from '../../../dataMocks/skills.json';
import { SkillsConstellation } from '../../SkillsConstellation';

export const MySkills: React.FC = () => {
    return (
        <section className={styles.container} id="skills">
            <Title text={'> Мои навыки'}/>
            <SkillsConstellation skills={skillsJson.skills} />
        </section>
    );
};
