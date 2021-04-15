import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import App from '../../../../../../CS 371/semester-project-group-10-alternate-project/hello-world-example/src/App';

function LoginButton(e) {
    console.log("Login Page");
    const newElement = ( < form id = "LoginForm" >
        <
        Form.Field >
        <
        input placeholder = "Name" / >
        <
        /Form.Field> <
        Form.Field >
        <
        input placeholder = "Email" / >
        <
        /Form.Field> <
        Button type = "submit" > LoginButton < /Button> < /
        form > )
}

export
default App;