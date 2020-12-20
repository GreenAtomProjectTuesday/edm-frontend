import React from 'react';
import { cn } from '@bem-react/classname';

import './LoginLayout.css';


export interface LoginLayoutProps {
    readonly className?: string;
}

const cnLoginLayout = cn('LoginLayout');

export const LoginLayout: React.FC<LoginLayoutProps> = ({ className, children }) => (
    <div className={cnLoginLayout(null, [className])}>
        <div className={cnLoginLayout('contentContainer')}>
            {children}
        </div>
    </div>
);
