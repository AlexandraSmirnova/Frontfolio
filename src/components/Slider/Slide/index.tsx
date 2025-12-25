import React from 'react';

import styles from './styles.css';


export interface SlideProps {
    name: string;
    description: string;
    image: string;
}

export const Slide: React.FC<SlideProps> = ({ name, description, image }) => {
    return (
        <div className={styles.slide} style={{ backgroundImage: `url(/images/${image})`}}>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.overlay} />
        </div>
    );
};
