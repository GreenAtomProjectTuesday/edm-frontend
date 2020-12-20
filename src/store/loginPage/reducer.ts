import { createReducer } from 'typesafe-actions';

import { LoginPageActionType } from './actions';


interface LoginPageState {
    ///
}

export const reducer = createReducer<LoginPageState, LoginPageActionType>({});
