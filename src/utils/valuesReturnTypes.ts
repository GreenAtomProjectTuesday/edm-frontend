
export type ValuesReturnTypes<T extends Record<string, any>> = {
    [P in keyof T]: ReturnType<T[P]>;
};

