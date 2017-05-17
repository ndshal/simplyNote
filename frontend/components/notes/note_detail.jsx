import React, { Component } from 'react';

class NoteDetail extends Component {
  render() {
    const { title, body } = this.props.note;

    return (
      <section className='note-detail'>
        <header>
          {title}
        </header>
        <p>
          {body}
        </p>
      </section>
    );
  }
}



export default NoteDetail;
