import React from 'react';

import { Button } from '../Button';
import styles from './styles.css';


interface HeaderTabProps {
    text: string;
    onClick(): void;
}

export const HeaderTab: React.FC<HeaderTabProps> = ({ onClick, text }) => {
    return (
        <Button
            className={styles.headerTab}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};
