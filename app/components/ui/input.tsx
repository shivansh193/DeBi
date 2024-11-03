import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...props}
        />
    );
};
