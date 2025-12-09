import React from 'react';

import styles from './styles.css';
import { HeaderTab } from '../HeaderTab';
import { IconsBar } from '../IconsBar';

export const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tabs}>
                    <HeaderTab text="Навыки" onClick={() => {}}/>
                    <HeaderTab text="О себе" onClick={() => {}}/>
                    <HeaderTab text="Портфолио" onClick={() => {}}/>
                    <HeaderTab text="Контакты" onClick={() => {}}/>
                </div>
                <IconsBar />
            </div>
        </div>
    );
};

