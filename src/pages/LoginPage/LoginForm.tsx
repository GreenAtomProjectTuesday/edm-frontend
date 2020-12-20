import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { InputLabel } from '../../components/InputLabel/InputLabel';
import { Button } from 'primereact/button';
import { ButtonContainer } from '../../components/ButtonContainer/ButtonContainer';


export const LoginForm: React.FC = () => {
    const onSubmit = useCallback(
        () => {},
        []
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <InputLabel label="Имя пользователя:">
                        <Field name="username">
                            {({ input }) => (
                                <InputText {...input} />
                            )}
                        </Field>
                    </InputLabel>

                    <InputLabel label="Пароль:">
                        <Field name="password">
                            {({ input }) => (
                                <InputText type="password" {...input} />
                            )}
                        </Field>
                    </InputLabel>

                    <ButtonContainer>
                        <Button label="Вход" />
                    </ButtonContainer>
                </form>
            )}
        </Form>
    );
}
