import React from "react";

function Story(props) {  
  return (
    <div className="box">
      <h1>{props.article.author}</h1>
      <h2>{props.article.title}</h2>
      <p>{props.article.description}</p>
      <img src={props.article.urlToImage}></img>
    </div>
    )
}
// rewrite saveArticles function in App
// pass saveArticles to Searchbar

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