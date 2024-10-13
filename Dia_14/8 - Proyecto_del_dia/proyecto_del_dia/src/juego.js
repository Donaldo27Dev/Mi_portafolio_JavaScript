import React from 'react';

function Juego(props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1); 

    function comprobarNumeroUusario(evento){//CAPTURA LA INFORMACIÓN DEL EVENTO
        setNumeroUsuario(evento.target.value)
    }

    function comprobarNumeroMaquina(){
        if(numeroUsuario == numeroMaquina){
            alert("ADIVINASTE!!!!!! 🥳. EL NUMERO QUE ELEJIDO POR LA MAQUINA FUE: " + numeroMaquina);
        }else{
            alert("QUE MAL! 🥺. EL NUMERO ELEJIDO POR LA MAQUINA FUE: " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random() * props.limite) + 1)
    }

    return(
        <div>
            <p>Elije un Numero del 1 - 10</p>
            <input 
            type="number" 
            placeholder="Ingresa tu apuesto" 
            min={1} 
            max={10}
            onChange={comprobarNumeroUusario}></input>
            <br/>
            <button
            onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
    )
}

export default Juego;