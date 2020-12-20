import { createAsyncAction } from 'typesafe-actions';

import { Credentials } from '../../models/credentials';
import { ValuesReturnTypesType } from '../../utils/valuesReturnTypesType';

export const fetchTokenAction = createAsyncAction(
    'FETCH_TOKEN_REQUEST',
    'FETCH_TOKEN_SUCCESS',
    'FETCH_TOKEN_FAILURE'
)<Credentials, void, void>();

type FetchTokenActionType = ValuesReturnTypesType<typeof fetchTokenAction>;

export type LoginPageActionType = FetchTokenActionType;
