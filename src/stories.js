import React from "react";

function Story(props) {
  return <h1>{props.title}</h1>
}

class Stories extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {articles:[
      {
        "source": {
          "id": "mashable",
          "name": "Mashable"
        },
        "author": "Sage Anderson",
        "title": "WeRateDogs is releasing a new card game where you can rate all the good pups",
        "description": "Have you every spotted a dog in the wild and thought, \"Wow, that is a certified Good Boy, 13/10, would recommend?\" Then this is the perfect card game for you. The viral Twitter account WeRateDogs, or, \"Your Only Source For Professional Dog Ratings,\" according…",
        "url": "https://mashable.com/article/weratedogs-card-game-dogs/",
        "urlToImage": "https://mondrian.mashable.com/2019%252F02%252F07%252F37%252Fe6fbdc0a56444996bfea30d695882c82.705a9.jpg%252F1200x630.jpg?signature=Ljq4QL7u7tstZOAVqvPx5T554yE=",
        "publishedAt": "2019-02-07T19:13:26Z",
        "content": "Have you every spotted a dog in the wild and thought, \"Wow, that is a certified Good Boy, 13/10, would recommend?\" Then this is the perfect card game for you. \r\nThe viral Twitter account WeRateDogs , or, \"Your Only Source For Professional Dog Ratings,\" accord… [+1428 chars]"
      }
    ]};
  }

  render() {
    return(
      <div>
        <Story title={this.state.articles[0].title}></Story>
        <Story name="bork2"></Story>
      </div>
    )
  }
}

export default Stories