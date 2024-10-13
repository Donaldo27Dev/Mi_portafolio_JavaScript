import React from 'react';
import './App.css'; //IMPORTAR ESTILOS
import Titulo from './titulo';
//import Juego from './juego';
import Mostrar_NombreUsuario from './mostrar_nombreusuario';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Mostrar_NombreUsuario/>
    </div>
  );
}

export default App;
