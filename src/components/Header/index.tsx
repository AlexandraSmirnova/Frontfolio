import React from 'react';

import styles from './styles.css';
import { HeaderTab } from '../HeaderTab';
import { ContactIconsBar } from '../ContactIconsBar';

export const Header: React.FC = () => {
    const getHandleClick = (hash: string) => () => {
        window.location.hash = hash;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tabs}>
                    <HeaderTab text="Навыки" onClick={getHandleClick('skills')}/>
                    <HeaderTab text="О себе" onClick={getHandleClick('about')}/>
                    <HeaderTab text="Портфолио" onClick={getHandleClick('portfolio')}/>
                    <HeaderTab text="Контакты" onClick={getHandleClick('contacts')}/>
                </div>
                <ContactIconsBar />
            </div>
        </div>
    );
};

