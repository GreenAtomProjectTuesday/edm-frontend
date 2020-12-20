import React from 'react';
import { Panel } from 'primereact/panel';
import { cn } from '@bem-react/classname';

import { Page } from '../../components/Page';
import { LoginLayout } from '../../layouts/LoginLayout/LoginLayout';

import './LoginPage.css';
import { LoginForm } from './LoginForm';


const cnLoginPage = cn('LoginPage');

export const LoginPage: React.FC = () => (
    <Page>
        <LoginLayout>
            <Panel header="Вход в систему" className={cnLoginPage('panel')}>
                <LoginForm />
            </Panel>
        </LoginLayout>
    </Page>
);
