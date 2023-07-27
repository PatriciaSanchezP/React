//Componente para una tarjeta para mostrar información de participantes

//Componentes comienzan con mayúsculas y tienen la extensión .jsx

//Importación de la hoja de estilos de mi tarjeta
import "./Tarjeta.css"

function TarjetaParticipante(props){
    return(
        <div className="tarjetaParticipante">
           {/* <h2> Título de la tarjeta </h2>
            <p> Descripción de la tarjeta </p> */} 

            <h2> {props.titulo} </h2>
            <p> {props.descripcion} </p>
            
        </div>
    )

}

//Exportar nuestro componente para utilizarlo en otro lado
export default TarjetaParticipante

