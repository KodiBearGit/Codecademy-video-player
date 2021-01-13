import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this);
  }
  
  changeVideo(e) {
    const video = e.target.value;
    this.props.chooseVideo(value);
  }

  render() {
    return (
      <form chooseVideo={this.changeVideo} >
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}