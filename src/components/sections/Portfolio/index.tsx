
import React from 'react';

import styles from './styles.css';
import { Slider } from '../../Slider';
import portfolioJson from '../../../dataMocks/portfolio.json';
import { Title } from '../../Title';


export const Portfolio: React.FC = () => {
    return (
        <section className={styles.container} id="portfolio">
            <Title text={'> Портфолио'}/>
            <Slider items={portfolioJson.projects} />
        </section>
    );
};
