import React from "react";

function Story(props) {  
  return (
    <div class="box">
      <h1>{props.article.author}</h1>
      <h2>{props.article.title}</h2>
      <p>{props.article.description}</p>
      <img src={props.article.urlToImage}></img>
    </div>
    )
}

function Stories(props) {  
  return(
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4 is-vertical">
      {this.props.articles0.map(article => {
        return <Story article={article}></Story>
      })}
      </div>
    </div>
  )
}


export default Stories