import React from "react";
import { createRoot } from "react-dom/client";
import { Form, FormControl, TextField, Validator } from "react-inekz";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import { Inject } from "./decorators";
import TestService from "./services/test";

class App extends React.Component {

    @Inject('Test') Test: TestService;

    render() {
        return (
            <div>
                <h1>Hola Mundo</h1>
                <Form name='form' onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        name='email'
                        control={new FormControl(null, [Validator.email, Validator.required])}
                        label='email'
                    />
                    <TextField
                        name='password'
                        control={new FormControl(null, [Validator.required])}
                        label='Contraseña'
                    />
                    <button type='submit'>
                        <Loading />
                        Enviar
                    </button>
                </Form>
            </div>
        );
    }

    handleSubmit(value: any, isValid: boolean) {
        this.Test.test()
        .subscribe({
            next: console.log,
            error: console.error
        })
    }
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
