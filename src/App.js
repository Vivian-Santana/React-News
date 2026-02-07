import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

/* Componente em classe é uma classe que herda a classe Component do React
* e retorna html dentro do metodo render
*/
class App extends React.Component {
  // metodo que renderiza o conteúdo do componente no html
  render(){
    return <Navbar/>;
  }
}

export default App;
