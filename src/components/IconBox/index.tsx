import React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

interface IconBoxProps extends React.HTMLProps<HTMLDivElement> {
    icon: React.ReactElement;
    className?: string;
}

export const IconBox: React.FC<React.PropsWithChildren<IconBoxProps>> = ({ icon, className, ...rest }) => {
    return (
        <div
            className={classnames(styles.container, className)}
            {...rest}
        >
            {icon}
        </div>
    );
};
