import React from 'react';

import styles from './styles.css';
import { AnimationProvider } from '../../AnimationProvider';
import { BREAKPOINT_S } from '../../../utils/constants';


export const Hello: React.FC = () => {
    const rows = window.innerWidth > BREAKPOINT_S
        ? ['Привет!', 'Меня зовут Александра Смирнова', 'Я — Фронтенд-разработчик']
        : ['Привет!', 'Меня зовут', 'Александра Смирнова', 'Я Фронтенд-разработчик'];
    let delay = 0;

    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>
                    {rows.map((item, index) => {
                        const symbols = item.length + 2;
                        const style={
                            '--symbols-count': `${symbols}ch`,
                            '--duration': `${symbols / 10}s`,
                            '--step-count': symbols,
                            'animation-delay': index === 0 ? 0 :`${delay}s`,
                        } as React.CSSProperties;
                        delay += symbols / 10;

                        return (
                            <div className={styles.row} style={style} key={item}>{'>'} {item}</div>
                        );
                    })}
                </h1>
                <AnimationProvider className={styles.photo}/>
            </div>
        </section>
    );
};
