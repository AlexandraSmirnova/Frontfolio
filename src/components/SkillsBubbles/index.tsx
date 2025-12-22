import React from 'react';

import styles from './styles.css';
import { Skill } from '../../types/skills';
import { SkillBubble, SkillBubbleSize } from './SkillBubble';


interface SkillsBubblesProps {
    skills: Skill[];
}

const sizeByLevel: Record<number, SkillBubbleSize> = {
    0: 'empty',
    1: 'small',
    2: 'middle',
    3: 'large',
    4: 'xlarge'
};

export const SkillsBubbles: React.FC<SkillsBubblesProps> = ({ skills }) => {
    const emptyBubble = <SkillBubble size={'empty'}/>;
    return (
        <div className={styles.container}>

            {skills.map(({ name, level }, index) => {
                return (
                    <>
                        {index % 2 === 0 && emptyBubble}
                        <SkillBubble
                            variant={index % 2 === 0 ? 'dark' : 'light'}
                            size={sizeByLevel[level]}
                            key={name}
                            text={name}
                        />
                    </>
                );
            })}
        </div>
    );
};
