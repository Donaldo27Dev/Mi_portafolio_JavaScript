import React from 'react';
import Juego from './juego';

function Mostrar_NombreUsuario(){
    const [nombreUs, setnombreUs] = React.useState('');

    function cambioDeEstado(evento){
        setnombreUs(evento.target.value);
    }

    function guardarNombreUsuario(){    
        if(nombreUs.trim() !== ""){
            alert("EL NOMBRE DEL USUARIO ES: " + nombreUs);
        }else{
            alert("NO SE ENCONTRO EL NOMBRE DEL USUARIO");
        }
    }

    return(
        <div>
            <p>INGRESA TU NOMBRE DE USUARIO</p>
            <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombreUs}
            onChange={cambioDeEstado}></input>   
            <br/>
            <br/>
            <button
            onClick={guardarNombreUsuario}>Eviame 😉</button>
            
        </div>
    )
}

export default Mostrar_NombreUsuario;