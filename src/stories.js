import React from "react";

function Story(props) {  
  return (
    <div className="tile is-child box">
      <h1 className="title">{props.article.title}</h1>
      <h2 className="subtitle">{props.article.author}</h2>
      <p className="content">{props.article.description}</p>
      <img src={props.article.urlToImage}></img>
    </div>
    )
}

function Stories(props) {  

    return(
      <div className="tile is-ancestor">

        <div className="tile is-parent is-4 is-vertical">
        {props.column0.map(article => {
          return <Story article={article} key={article.author}></Story>
        })}
        </div>

        <div className="tile is-parent is-4 is-vertical">
        {props.column1.map(article => {
          return <Story article={article} key={article.author}></Story>
        })}
        </div>

        <div className="tile is-parent is-4 is-vertical">
        {props.column2.map(article => {
          return <Story article={article} key={article.author}></Story>
        })}
        </div>
      </div>
    )
}


export default Stories