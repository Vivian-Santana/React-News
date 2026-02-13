import { Article } from './components/Article/Article';
import { Navbar } from './components/Navbar/Navbar';
import './styles/App.css';
import React from 'react';

import imgCicloDeVida from './assets/imagens/react-ciclo-de-vida.png'
import imgReactLogo from './assets/imagens/logo-react-bacground-preto.png'
import imgReactSPA from './assets/imagens/react-SPA.png'
import imgStyledComponents from './assets/imagens/react-estilos.png'



/* Componente em classe é uma classe que herda a classe Component do React
* e retorna html dentro do metodo render
*/
class App extends React.Component {
  // metodo que renderiza o conteúdo do componente no html
  render(){
    return(
      <>
        <Navbar/>

        <section id="articles">

          <Article title="Fundamentos básicos de JavaScript necessários para aprender React" 
          author="DEVMEDIA" 
          description="Neste artigo você saberemos quais os conceitos básicos na linguagem JavaScript você precisará ter para começar a aprender a biblioteca React JS." 
          thumb={imgReactLogo}
          url="https://www.devmedia.com.br/fundamentos-basicos-de-javascript-necessarios-para-aprender-react/43553"
          />
          
          <Article title="React SPA: Entendendo o conceito de uma Single Page Application" 
          author="DEVMEDIA" 
          description="Nesta documentação você aprenderá o que é uma Single Page Application e como esse conceito pode ser aplicado nas suas páginas, além de ver como utilizá-lo em um projeto React."
          thumb={imgReactSPA}
          url="https://www.devmedia.com.br/react-spa-entendendo-o-conceito-de-uma-single-page-application/43490"
          />

          <Article title="Ciclo de vida de um componente React com o Effect Hook" 
          author="DEVMEDIA" 
          description="Neste artigo você aprenderá o que é o ciclo de vida de um componente React, quais as suas fases e como é possível utilizar o Hook useEffect para criar essas fases."
          thumb={imgCicloDeVida}
          url="https://www.devmedia.com.br/ciclo-de-vida-de-um-componente-react-com-o-effect-hook/43555"
          />
          
          <Article title="Utilizando Styled Components no React" 
          author="DEVMEDIA" 
          description="Este artigo explica como utilizar Styled Components no React para estilizar componentes de forma mais eficiente." 
          thumb={imgStyledComponents}
          url="https://www.devmedia.com.br/utilizando-styled-components-no-react/43554"
          />
          
        </section>
      </>
    )
    
  }
}

export default App;
