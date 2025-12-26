import React from 'react';

import Github from './resources/github.svg';
import VK from './resources/vk.svg';
import Telegram from './resources/telegram.svg';
import styles from './styles.css';
import { IconBox } from '../IconBox';

const config = [
    {
        icon: <VK width="32" height="32" />,
        href: 'https://vk.com/alexandrius23',
    },
    {
        icon: <Telegram width="30" height="30" />,
        href: 'https://t.me/alexandrius23',
    },
    {
        icon: <Github width="32" height="32" />,
        href: 'https://github.com/AlexandraSmirnova',
    }
];

export const ContactIconsBar: React.FC = () => {
    const getHandleClick = (href: string) => () => {
        window.location.href = href;
    };

    return (
        <div className={styles.container}>
            {config.map(({ icon, href }) => (
                <IconBox key={href} icon={icon} onClick={getHandleClick(href)}/>
            ))}
        </div>
    );
};
