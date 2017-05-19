import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { createEditorNoteBody, createRawNoteBody } from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
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
    this.props.updateNote(createRawNoteBody(this.state));
  }

  render() {
    const { title, body } = this.state;

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>
        <input
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

export default NoteDetail;
