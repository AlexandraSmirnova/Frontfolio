import React from 'react';

import { Hello } from './sections/Hello';
import { MySkills } from './sections/MySkills';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Contacts } from './sections/Contacts';

export const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <Hello />
            <MySkills />
            <About />
            <Portfolio />
            <Contacts />
        </div>
    );
};



