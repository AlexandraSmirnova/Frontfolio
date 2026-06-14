import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';


interface ComponentProps {
    onClick(): void;
}

export interface SlideProps {
    name: string;
    description: string;
    image: string;
    isContainBackground?: boolean;
}

export const Slide: React.FC<SlideProps & ComponentProps> = ({ name, description, image, isContainBackground = false, onClick }) => {
    return (
        <div
            className={classNames(styles.slide, {[styles.isContain]: isContainBackground})}
            style={{ backgroundImage: `url(images/${image})`}}
            onClick={onClick}
        >
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.overlay} />
        </div>
    );
};
