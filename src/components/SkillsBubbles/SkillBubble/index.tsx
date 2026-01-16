import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import { AnimationProvider } from '../../AnimationProvider';


interface SkillBubbleProps {
    className?: string;
    variant?: SkillBubbleVariant;
    size: SkillBubbleSize;
    text?: string;
}

export type SkillBubbleVariant = 'dark' | 'light';
export type SkillBubbleSize = 'small' | 'middle' | 'large' | 'xlarge' | 'empty';

export const SkillBubble: React.FC<SkillBubbleProps> = ({ text, variant = 'dark', size}) => {
    return (
        <AnimationProvider
            variant='scale'
            className={classNames(styles[variant], styles[size], styles.container)}
        >
            {text}
        </AnimationProvider>
    );
};
