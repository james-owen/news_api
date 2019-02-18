import React from "react";
import SearchBar from "./searchBar";
import Stories from "./stories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <div>
    <SearchBar></SearchBar>
    <Stories></Stories>
    </div>

    )
  }
}

export default App;