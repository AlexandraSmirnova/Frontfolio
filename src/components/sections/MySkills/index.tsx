import React from 'react';

import styles from './styles.css';
import { Title } from '../../Title';
import skillsJson from './skills.json';
import { SkillsBubbles } from '../../SkillsBubbles';

export const MySkills: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title text={'Мои навыки'}/>

            <SkillsBubbles skills={skillsJson.skills} />
        </div>
    );
};
