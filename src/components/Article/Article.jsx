import React  from "react";
import "./Article.css"

export class Article extends React.Component{
    render(){
        return(
            <article id="article">
                <div className="thumb">
                    <a href={this.props.url}
                        target="_blank" rel="noopener noreferrer"
                        className="article-link"
                    >
                        <img src={this.props.thumb} alt={this.props.title}/>
                    </a>
                </div>
                
                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.author}</h3>
                    <p> {this.props.description}</p>
                </div>
            </article>
        )
    }
}
