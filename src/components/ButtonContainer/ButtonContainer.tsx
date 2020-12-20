import React from 'react';
import { cn } from '@bem-react/classname';

import './ButtonContainer.css';


export interface ButtonContainerProps {
    readonly className?: string;
}

const cnButtonContainer = cn('ButtonContainer');

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ className, children }) => (
    <div className={cnButtonContainer(null, [className])}>
        {children}
    </div>
);
