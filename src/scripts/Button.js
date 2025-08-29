import React from 'react';
import '../css/Button.css';

export default function Button({ text }) {
    const inputs_value = document.getElementsByClassName(".input");

    function calculate() {
        let result = inputs_value[0].value / inputs_value[1].value;

        if (result < 0.7) {
            alert("Recomendação: Abastecer com álcool");
        } else {
            alert("Recomendação: Abastecer com gasolina");
        }
    }

    return (
        <React.Fragment>
            <br/><br/>
            <button onClick={calculate}>{text}</button>
        </React.Fragment>
    )
}