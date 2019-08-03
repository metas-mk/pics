import React from 'react';

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    // prop is the reference to callback function of App.onSearchSubmit()
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Image Search..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
