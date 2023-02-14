import React from "react";
import { createRoot } from "react-dom/client";
import { Form, FormControl, Inject, TextField, Validator } from "react-inekz";
import TestService from "./services/test";

class App extends React.Component {
    @Inject(TestService) Test: TestService;

    componentDidMount() {
        this.Test.test().subscribe(console.log);
    }

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
                    <button type='submit'>Enviar</button>
                </Form>
            </div>
        );
    }

    handleSubmit(value: any, isValid: boolean) {
        console.log(value, isValid);
        this.Test.test().subscribe(console.log);
    }
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
