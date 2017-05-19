import React, { Component } from 'react';
import { merge } from 'lodash';
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
  ContentState
} from 'draft-js';
import { InlineStyleControls } from '../editor/style_controls';
import { createEditorNoteBody } from '../../util/note_conversion_util';

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
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
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

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.body,
      command);
    if (newState) {
      this.update('body')(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  toggleInlineStyle(inlineStyle) {
    this.update('body')(
      RichUtils.toggleInlineStyle(
        this.state.body,
        inlineStyle
      )
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = merge({}, this.state);
    note.body = convertToRaw(note.body.getCurrentContent());
    this.props.updateNote(note);
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

        <InlineStyleControls
          editorState={body}
          onToggle={this.toggleInlineStyle}
        />
        <Editor
          className='editor'
          editorState={body}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.update('body')} />
        <button
          onClick={this.handleSubmit}>Save Note</button>
      </from>
    );
  }
}

export default NoteDetail;
