import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';


export const Hello: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>
                    <div className={classNames(styles.row, styles.row1)}>{'>'} Привет!</div>
                    <div className={classNames(styles.row, styles.row2)}>{'>'} Меня зовут Александра Смирнова</div>
                    <div className={classNames(styles.row, styles.row3)}>{'>'} Я - фронтенд-разработчик</div>
                </h1>

                <div className={styles.photo}/>
            </div>
        </section>
    );
};
