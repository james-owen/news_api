import React from "react";

class SearchBar extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getStories(this.state.searchTerm);
  }

  getStories(searchTerm) {
    let url = 'https://newsapi.org/v2/everything?' +
    'q=' + searchTerm + '&' +
    'sortBy=relevancy&' +
    'apiKey=9219abaec0b04cfd9176ce9d97fed1dd';

    fetch(url)
    .then((response) => response.json())
    .then((storiesJSON)=> {
      this.props.saveArticles(storiesJSON.articles);
    })
  }

  render() {
    return(
      <section className="hero">
        <div className="hero-body">
          <form onSubmit={this.handleSubmit}>
          <div className="field has-addons">

            <div className="control">
              <input 
              className="input" 
              type="text" 
              placeholder="Search"
              value={this.state.searchTerm}
              onChange={this.handleChange}></input>
            </div>
            
            <div className="control">
              <input 
              type="submit" 
              className="button is-info"
              value="Search" />
            </div>

          </div>
          </form>
        </div>
      </section>
    )
  }
}

export default SearchBar