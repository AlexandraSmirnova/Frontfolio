import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.css';


interface SkillPointProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    variant?: SkillPointVariant;
    text?: string;
    description?: string;
    ref: (el: HTMLElement) => void;
}

export type SkillPointVariant = 'dark' | 'light';

export const SkillPoint = forwardRef<HTMLDivElement, SkillPointProps>(({ text, description, variant = 'dark', ...props}, ref) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current!);

    const handlePointClick = () => {
        setIsExpanded((val) => !val);
    };

    const handleClickOutside = (event: Event) => {
        if (isExpanded && !localRef.current?.contains(event.target as HTMLElement)) {
            setIsExpanded(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            className={classNames(styles[variant], styles[isExpanded ? 'big' : 'small'], styles.container)}
            onClick={handlePointClick}
            ref={localRef}
            {...props}
        >
            {text}
            {description && isExpanded && <div className={styles.description} style={{ whiteSpace: 'pre-wrap' }}>{description}</div>}
        </div>
    );
});
