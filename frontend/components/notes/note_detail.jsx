
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  createEditorNoteBody,
  createRawNoteBody,
  createEmptyNote
} from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = createEmptyNote();
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     if(this.props.formType === 'edit') {
       this.props.fetchNote()
       .then(({note}) => this.setState(createEditorNoteBody(note)));
     }
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       if(newProps.formType === 'new') {
         this.setState(createEmptyNote());
       } else {
         newProps.fetchNote()
         .then(({note}) => this.setState(createEditorNoteBody(note)));
       }
     }
   }

  update(field) {
    return value => this.setState({[field]: value});
  }

  processForm(note) {
    if(this.props.formType === 'edit') {
      this.props.updateNote(note);
    } else {
      this.props.createNote(note)
        .then(({note}) => this.props.history.push(`/home/notes/${note.id}`))
        .then(this.props.clearErrors);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = createRawNoteBody(this.state);
    this.processForm(note);
  }

  render() {
    const { title, body } = this.state;

    return (
      <from
        className='note-detail'
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

export default withRouter(NoteDetail);
