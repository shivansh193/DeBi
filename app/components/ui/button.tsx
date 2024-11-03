import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
    const baseStyle = 'px-4 py-2 rounded-lg font-medium transition-all';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-slate-700 text-white hover:bg-slate-800',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    return (
        <button className={`${baseStyle} ${variantStyles[variant]}`} {...props}>
            {children}
        </button>
    );
};
