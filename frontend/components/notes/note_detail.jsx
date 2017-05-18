import React, { Component } from 'react';

class NoteDetail extends Component {
   componentDidMount() {
     this.props.fetchNote();
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       newProps.fetchNote();
     }
   }

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
