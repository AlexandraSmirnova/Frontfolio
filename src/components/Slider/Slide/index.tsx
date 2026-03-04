import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';


export interface SlideProps {
    name: string;
    description: string;
    image: string;
    isContainBackground?: boolean;
}

export const Slide: React.FC<SlideProps> = ({ name, description, image, isContainBackground = false }) => {
    return (
        <div
            className={classNames(styles.slide, {[styles.isContain]: isContainBackground})}
            style={{ backgroundImage: `url(images/${image})`}}
        >
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.overlay} />
        </div>
    );
};
