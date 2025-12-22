import React from 'react';

import styles from './styles.css';


interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    );
};
