import React from 'react';


interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick(): void;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, onClick, disabled = false, type = 'button', ...rest }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
};
