import React from 'react';

import styles from './styles.css';
import { Title } from '../../Title';
import { ContactIconsBar } from '../../ContactIconsBar';
import { IconBox } from '../../IconBox';
import Mail from './resources/mail.svg';
import { AnimationProvider } from '../../AnimationProvider';


export const Contacts: React.FC = () => {
    return (
        <section className={styles.container} id="contacts">
            <Title text={'> Контакты'}/>
            <AnimationProvider className={styles.content}>
                <div className={styles.emailContact}>
                    <IconBox icon={<Mail width="32" height="32" />} />
                    smirnova-a-yu@mail.ru
                </div>
                <ContactIconsBar />
                <div className={styles.license}>© 2026 Smirnova Alexandra</div>
            </AnimationProvider>
        </section>
    );
};
