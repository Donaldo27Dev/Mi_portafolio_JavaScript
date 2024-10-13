// ELEMENTOS DE IMPORTACIÓN, ARCHIVOS, DOCUMENTOS O MÓDULOS
import React from 'react';
import SaludarBro from './Saludo';
import Mensaje from './Mensaje';

// LA FUNCIÓN 'App()' NOS PERMITE COMPILAR TODOS LOS COMPONENTES DE NUESTRO PROYECTO
function App(){
  return(
    <div>
      <SaludarBro nombre="Yo Angel"/>
      <Mensaje msj="Bienvenido a mi app REACT"/>
      <SaludarBro nombre="Camila Zamora"/>

      
    </div>
  )
}

export default App;