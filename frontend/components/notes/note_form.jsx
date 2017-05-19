
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { createEditorNoteBody, createRawNoteBody } from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      body: EditorState.createEmpty(),
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     this.props.fetchNote()
      .then(({note}) => this.setState(createEditorNoteBody(note)));
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       newProps.fetchNote()
       .then(({note}) => this.setState(createEditorNoteBody(note)));
     }
   }

  update(field) {
    return value => this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = createRawNoteBody(this.state);
    if(note.id) {
      this.props.updateNote(note);
    } else {
      this.props.createNote(note);
    }
  }

  render() {
    const { title, body } = this.state;

    return (
      <from
        className='note-form'
        onSubmit={this.handleSubmit}>
        <input
          className='note-title'
          onChange={(e) => this.update('title')(e.target.value)}
          value={this.state.title}
          placeholder='title your note...'/>

        <RichEditor
          onChange={this.update('body')}
          editorState={body} />
        <button
          onClick={this.handleSubmit}>Save Note</button>
      </from>
    );
  }
}

export default NoteForm;
