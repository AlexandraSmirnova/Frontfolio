import React from 'react';

import { Hello } from './sections/Hello';
import { MySkills } from './sections/MySkills';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Contacts } from './sections/Contacts';
import { Header } from './Header';
import './variables.css';
import styles from './base.css';
import { Photo } from './sections/Photo';


export const App: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const lastScrollTop = React.useRef<number>(0);
    const [hideHeader, setHideHeader] = React.useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || ref.current.scrollTop;
        setHideHeader(scrollTop > lastScrollTop.current && scrollTop > 50);
        lastScrollTop.current = scrollTop;
    };

    React.useEffect(() => {
        if (!ref.current) {
            return () => {};
        }

        ref.current.addEventListener('scroll', handleScroll);
        return () => {
            ref.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.main} ref={ref}>
            <Header visible={!hideHeader}/>
            <Hello />
            <MySkills />
            <About />
            <Photo />
            <Portfolio />
            <Contacts />
        </div>
    );
};



