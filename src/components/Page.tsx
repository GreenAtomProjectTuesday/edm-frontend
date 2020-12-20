import React from 'react';
import { cn } from '@bem-react/classname';


export interface PageProps {
    readonly className?: string;
}

const cnPage = cn('Page');

export const Page: React.FC<PageProps> = ({ className, children }) => {
    return <div className={cnPage(null, [className])}>
        {children}
    </div>;
};
