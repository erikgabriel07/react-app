import React from 'react';
import '../css/Input.css';

export default function Input({ text }) {
    return (
        <React.Fragment>
            <p>{text}</p>
            <input type="number" step="0.01" className=".input"></input>
        </React.Fragment>
    );
}