import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  // arrow function with async/ await
  onSearchSubmit = async term => {
    // promise
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
