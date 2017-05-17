import React, { Component } from 'react';

class NoteIndexItem extends Component {
  bodyPreview() {
    let words = this.props.body.split(' ').slice(0,10);
    words = words.join(' ');

    if (words.length > 40) {
      return this.props.body.slice(0,40);
    } else {
      return words;
    }
  }

  render () {
    return (
      <li>
        <header>{this.props.title}</header>
        <p>{this.bodyPreview()}</p>
      </li>
    );
  }
}

export default NoteIndexItem;
