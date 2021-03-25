import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/** Elemento en DOM: */
/* const element = <h1>Domo arigato</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
); */

/** Actualizar un elemento renderizado: */
/* function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000); */

/** Definir componentes funcionales
 * Acepta solo un argumento (props)
 * Devuelve un elemento de React
 */
/* function Welcome(props) {
  return <h1>Holo, {props.name}</h1>
}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
} */

/** Renderizando un componente
 * Llamamos al render con el elemento <Welcome name="Sara" />
 * React llama al componente Welcome con {name: 'Sara'} como "props"
 * El componente Welcome devuelve un elemento <h1>Holo, Sara</h1>
 * React DOM actualiza el DOM.
 */
/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
); */

/** Componentes que refieren a otros componentes */
/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
); */

/** Las props son de solo lectura
 * Está prohibido cambiar el valor de las props dentro de las funciones y clases
 * Ejemplo de hacer operaciones sin alterar las props (correcto), 
 * y despues ejemplo de lo prohibido.
 */
/*  function sum(a, b) {
  return a + b;
}
function withdraw(account, amount) {
  account.total -= amount;
} */

