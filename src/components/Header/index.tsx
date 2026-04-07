import React, { useRef } from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import { HeaderTab } from '../HeaderTab';
import { ContactIconsBar } from '../ContactIconsBar';
import { IconBox } from '../IconBox';
import BurgerMenu from '../../images/svg/burger-menu.svg';
import Cross from '../../images/svg/cross.svg';


interface HeaderProps {
    visible: boolean;
}

export const Header: React.FC<HeaderProps> = ({ visible }) => {
    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState<boolean>(false);
    const navbarMenuRef = useRef(null);

    const getHandleClick = (hash: string) => () => {
        window.location.hash = hash;
    };

    const handleBurgerButtonClick = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsNavMenuOpen(false);
    };

    const handleClickOutside = (event: Event) => {
        if (isNavMenuOpen && navbarMenuRef.current && !navbarMenuRef.current.contains(event.target)) {
            handleCloseMenu();
        }
    };

    React.useEffect(() => {
        if (!visible && isNavMenuOpen) {
            setIsNavMenuOpen(false);
        }
    }, [visible]);

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavMenuOpen, handleClickOutside]);

    return (
        <div className={classNames(styles.container, { [styles.hidden]: !visible})}>
            <div className={styles.header}>
                <div
                    className={classNames(styles.tabs, {
                        [styles.active]: isNavMenuOpen,
                    })}
                    ref={navbarMenuRef}
                >
                    <HeaderTab text="Навыки" onClick={getHandleClick('skills')}/>
                    <HeaderTab text="О&nbsp;себе" onClick={getHandleClick('about')}/>
                    <HeaderTab text="Портфолио" onClick={getHandleClick('portfolio')}/>
                    <HeaderTab text="Контакты" onClick={getHandleClick('contacts')}/>
                    <IconBox className={styles.crossIcon} onClick={handleCloseMenu} icon ={<Cross width="32" height="32"/>}/>
                </div>
                <ContactIconsBar className={styles.contacts} />
                <IconBox
                    className={styles.burgerButton}
                    onClick={handleBurgerButtonClick}
                    icon ={<BurgerMenu width="32" height="32"/>}
                />
            </div>
        </div>
    );
};

