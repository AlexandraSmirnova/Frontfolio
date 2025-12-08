import React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

interface IconBoxProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
}

export const IconBox: React.FC<React.PropsWithChildren<IconBoxProps>> = ({ children, className, ...rest }) => {
    return (
        <div
            className={classnames(styles.container, className)}
            {...rest}
        >
            {children}
        </div>
    );
};
