import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nota from './components/Nota';
import FormNota from './components/FormNota';



function App() {
  
  return (
    <div className="contenedor-notas">
      <h1>Notas</h1>
      <FormNota/>

    </div>
  );
}

export default App;
