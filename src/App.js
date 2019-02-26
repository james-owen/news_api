import React from "react";
import SearchBar from "./searchBar";
import Stories from "./stories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles0:[],
      articles1: [],
      articles2: [],
    };

    this.saveArticles = this.saveArticles.bind(this);
  }

  saveArticles(articles) {
    const articles0 = [];
    const articles1 = [];
    const articles2 = [];
    
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
    const newState = {
      articles0: articles0,
      articles1: articles1,
      articles2: articles2,
    }

    this.setState(() => newState, () => {console.log("STATE", this.state)})
  }


  render() {
    return(
      <div>
        <SearchBar saveArticles={this.saveArticles}></SearchBar>
        <Stories 
          column0={this.state.articles0}
          column1={this.state.articles1}
          column2={this.state.articles2}></Stories>
      </div>
    )
  }
}

export default App;