import React from 'react';

import styles from './styles.css';


export const Hello: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>
                    {'>'} Привет! <br/>
                    {'>'} Меня зовут Александра Смирнова <br/>
                    {'>'} Я - фронтенд-разработчик <br/>
                </h1>

                <div className={styles.photo}/>
            </div>
        </div>
    );
};
