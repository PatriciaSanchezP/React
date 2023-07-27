/*

JSX (JavaScript XML)

Nos sirve para poder escribir código similar a HTML dentro de JavaScript.
JSX se utiliza comunmente en react para definir la estructura y apariencia de los componentes.

createElement()
appendChild()

*/

//Importar el componente
import Tarjeta from "./components/Tarjeta"

//Crear mi componente principal App

function App(){
  return(
    <div>
      {/* Aquí dentro irán mis otros componentes */}
      <h1>Hola Generation</h1>
      <p>Proyecto para mostrar a los participantes de la CH27</p>

      <Tarjeta titulo="Felipe" descripcion= "Instructor"/>
      <Tarjeta titulo="Fernanda" descripcion= "Instructora"/>
      <Tarjeta titulo= "Patricia" descripcion= "Participante Cohorte 27"/>
      <Tarjeta titulo= "Miguel" descripcion="Participante"/>
      <Tarjeta titulo="Anyi" descripcion= "Participante"/>

    </div>
  )
}

// Cuando trabajamos con componentes, es necesario exportarlos para poder utilizarlas en cualquier otro lado de nuestro proyecto

export default App
