import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header className="my-header">
         <img src="logo192.png" className="App-logo" alt="app logo" />
            <h1>Add a Todo</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
