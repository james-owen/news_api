import React from "react";
import SearchBar from "./searchBar";
import Stories from "./stories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveArticles(articles) {
    articles0 = [];
    articles1 = [];
    articles2 = [];
    
    for (let i = 0; i < articles.length; i += 3) {
      if (articles[i]) {
        articles0.push(articles[i]);
      } else break;
      
      if (articles[i+1]){
        articles1.push(articles[i + 1]);
      } else break;

      if (articles[i+2]){
        articles2.push(articles[i+2]);
      } else break;
    }

    this.setState({
      articles1: articles1,
      articles2: articles2,
      articles3: articles3
    })
    
  }

  render() {
    return(
    <div>
    <SearchBar></SearchBar>
    <Stories 
      articles0={articles0}
      articles1={articles1}
      articles2={articles2}></Stories>
    </div>

    )
  }
}

export default App;