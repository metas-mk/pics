import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="" ui form>
          <div>
            <input type="text" placeholder="Image Search..." />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
