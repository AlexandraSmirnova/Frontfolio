import React, { useRef } from 'react';
import classNames from 'classnames';

import styles from './index.css';



interface AnimationProviderProps {
    variant?: 'fadeIn';
    className?: string;
}

export const AnimationProvider: React.FC<React.PropsWithChildren<AnimationProviderProps>> = ({
    children,
    className,
    variant='fadeIn',
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!ref.current) {
            return () => {};
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                } else {
                    entry.target.classList.remove(styles.visible);
                }
            });
        });

        observer.observe(ref.current);

        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={classNames(
                {
                    [styles.fadeIn]: variant === 'fadeIn',
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
