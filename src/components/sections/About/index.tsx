import React from 'react';

import styles from './styles.css';

export const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>{'>'} О себе</h1>
                <ul className={styles.description}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Nullam lacinia nunc ut metus commodo, vel condimentum enim tincidunt.</li>
                    <li>Donec sollicitudin dolor nec erat tristique, at ultricies est aliquam.</li>
                    <li>Suspendisse dapibus diam vel efficitur scelerisque.</li>
                    <li>Praesent hendrerit nisi ac massa bibendum, quis sagittis arcu egestas.</li>
                </ul>
            </div>
        </div>
    );
};

