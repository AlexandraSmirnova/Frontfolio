import React from 'react';

import Cross from '../../images/svg/cross.svg';
import { IconBox } from '../IconBox';


interface CloseButtonProps {
    className?: string;
    onClick(): void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ className, onClick }) => {
    return (
        <IconBox
            className={className}
            onClick={onClick}
            icon={<Cross width="32" height="32"/>}
        />
    );
};
