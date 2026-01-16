
import React from 'react';

import styles from './styles.css';
import { Slider } from '../../Slider';
import portfolioJson from '../../../dataMocks/portfolio.json';
import { Title } from '../../Title';
import { AnimationProvider } from '../../AnimationProvider';


export const Portfolio: React.FC = () => {
    return (
        <section className={styles.container} id="portfolio">
            <Title text={'> Портфолио'}/>
            <AnimationProvider>
                <Slider items={portfolioJson.projects} />
            </AnimationProvider>
        </section>
    );
};
