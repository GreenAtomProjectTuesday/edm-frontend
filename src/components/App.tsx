import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../store/store';
import { routes } from '../routes';


export const App: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>
);
