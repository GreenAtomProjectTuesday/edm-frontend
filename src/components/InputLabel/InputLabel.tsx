import React from 'react';
import { cn } from '@bem-react/classname';


import './InputLabel.css';

export interface InputLabelProps {
    readonly className?: string;
    readonly label: React.ReactNode;
}

const cnInputLabel = cn('InputLabel');

export const InputLabel: React.FC<InputLabelProps> = ({ className, label, children }) => (
    <label className={cnInputLabel(null, [className])}>
        <div className={cnInputLabel('labelContainer')}>
            {label}
        </div>

        <div className={cnInputLabel('contentContainer')}>
            {children}
        </div>
    </label>
);
