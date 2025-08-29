import React from 'react';
import Icon from './scripts/Icon';
import Input from './scripts/Input';
import Button from './scripts/Button';
import './css/App.css';


export default function App() {
  return (
    <React.Fragment>
      <div id="main-div">
        <Icon/>

        <h2>Qual a melhor opção?</h2>

        <Input text="Álcool (preço por litro):"></Input>
        <Input text="Gasolina (preço por litro):"></Input>

        <Button text="Calcular"></Button>
      </div>
    </React.Fragment>
  );
}
