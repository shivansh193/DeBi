import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <div className="bg-slate-900 rounded-lg shadow-lg border border-slate-700 p-6" {...props}>
            {children}
        </div>
    );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
    return (
        <div className="text-slate-300 space-y-4" {...props}>
            {children}
        </div>
    );
};
