import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import { HeaderTab } from '../HeaderTab';
import { ContactIconsBar } from '../ContactIconsBar';


interface HeaderProps {
    visible: boolean;
}

export const Header: React.FC<HeaderProps> = ({ visible }) => {
    const getHandleClick = (hash: string) => () => {
        window.location.hash = hash;
    };

    return (
        <div className={classNames(styles.container, { [styles.hidden]: !visible})}>
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

