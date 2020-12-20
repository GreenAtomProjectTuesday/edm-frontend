import { combineReducers } from 'redux';

import { reducer as loginPage } from './loginPage/reducer';


export const rootReducer = combineReducers({
    loginPage
});

export type RootState = ReturnType<typeof rootReducer>;
