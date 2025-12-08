import React from 'react';

import Github from './resources/github.svg';
import styles from './styles.css';
import { IconBox } from '../IconBox';


export const IconsBar: React.FC = () => {
    return (
        <div className={styles.container}>
            <IconBox>
                <Github />
            </IconBox>
        </div>
    );
};
