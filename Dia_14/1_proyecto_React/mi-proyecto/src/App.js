import React from 'react'; //SE IMPORTA EN ESTE CASO A 'REACT'

//SE LES DENOMINA 'COMPONENTE' EN ESTE CASO, A LA FUNCIÓN QUE RETORNA O DEVUELVE UN ELEMENTO DE REACT, ES DECIR, 
//DEVUELEVE CONTENIDO EN NUESTRA IU(interfaz de usuario).
function App(propos) {
  //JSX: Sintaxis especial para poder escribir código JavaScript con HTML
  //'useState' ES UN HOOK EN REACT, QUE ES UNA FUNCIÓN ESPECIAL QUE PERMITE UTILIZAR RECURSOS EN NUESTROS COMPONENTES
  //CUANDO APLICAMOS 'useState' NOS DEVUELVE UN ARREGLO CON DOS ELEMENTOS, EL PRIMER ELEMENTO VA HACER EL VALOR DE LA VARIABLE Y 
  //EL SEGUNDO SERÁ UNA FUNCIÓN QUE SE DISPARÉ AL CAMBIAR EL ESTADO.  
  let [Contador, setearConteo] = React.useState(0); 
  
  function aumentarConteo(){
    setearConteo(Contador + 1);
  }
  //RETORNA TODO EL CONTENIDO COMO TAL DE NUESTRO COMPONENTE
  return(
    <div style={{backgroundColor: propos.colorFondo}}>
      <h1 style={{color: propos.colorTexto}}>Contador: {Contador}</h1>
      <button onClick={aumentarConteo}>Incrementar</button>
    </div>
  );
}

export default App;
