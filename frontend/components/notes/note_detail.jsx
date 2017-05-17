import React from 'react';

const NoteDetail = (props) => (
  <section className='note-detail'>
    <h1>Viewing note # {props.match.params.noteId}</h1>
  </section>
);

export default NoteDetail;
