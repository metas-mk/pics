import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.ImageRef);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.ImageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
