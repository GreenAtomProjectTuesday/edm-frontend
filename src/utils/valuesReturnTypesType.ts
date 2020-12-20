import { ValuesType } from 'utility-types';

import { ValuesReturnTypes } from './valuesReturnTypes';

export type ValuesReturnTypesType<T> = ValuesType<ValuesReturnTypes<T>>;
