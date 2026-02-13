import React from "react";
import './Navbar.css';
import logo from "../../assets/imagens/logo.svg";

export class Navbar extends React.Component{
        render () {
            return(
                <header>
                    <nav id= "navbar">
                        <div className="nav-brand">
                            <img src={logo} alt="logo"/>
                            <h1>React News</h1>
                        </div>

                        <ul className="nav-list">
                            <li><a href="/">Início</a></li>
                            <li><a href="/">Tendências</a></li>
                            <li><a href="/">Categorias</a></li>
                            <li><a href="/">Sobre nós</a></li>
                        </ul>
                    </nav>

                </header>
            )
    };
}
