import React from 'react';

import { Hello } from './sections/Hello';
import { MySkills } from './sections/MySkills';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Contacts } from './sections/Contacts';
import { Header } from './Header';
import './variables.css';
import './base.css';


export const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Hello />
            <MySkills />
            <About />
            <Portfolio />
            <Contacts />
        </div>
    );
};



