import React from "react";

class SearchBar extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.searchTerm);
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

  componentDidMount(){
    console.log("SA Function", this.props.saveArticles)
  }

  render() {
    return(
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
    )
  }
}

export default SearchBar