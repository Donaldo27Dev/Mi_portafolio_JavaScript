import imagen from './cartel_Interrogacion.png';

function Titulo(){
    return (
        <div>
            <h1>El Acertijo</h1>
            <hr/>
            <img src={imagen} alt="LETRERO DE ACERTIJO" width="12%"></img>
        </div>
    )
}

export default Titulo;