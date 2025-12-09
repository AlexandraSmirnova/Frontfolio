import React from 'react';

import Github from './resources/github.svg';
import VK from './resources/vk.svg';
import Telegram from './resources/telegram.svg';
import styles from './styles.css';
import { IconBox } from '../IconBox';


export const IconsBar: React.FC = () => {
    return (
        <div className={styles.container}>
            <IconBox icon={<VK width="32" height="32" />} />
            <IconBox icon={<Telegram width="30" height="30" />} />
            <IconBox icon={<Github width="32" height="32" />} />
        </div>
    );
};
