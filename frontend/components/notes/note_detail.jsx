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
    this.mySetState = this.mySetState.bind(this);
  }

  mySetState(note) {
    let newState = merge({}, note);

    // if(typeof newState.body === 'string') {
    // const contentState = ContentState.createFromText(newState.body);
    const contentState = convertFromRaw(JSON.parse(newState.body));
    const editorState = EditorState.createWithContent(contentState);
    newState.body = editorState;

    this.setState(newState);
  }

   componentDidMount() {
     this.props.fetchNote()
      .then(({note}) => this.mySetState(note));
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       newProps.fetchNote()
       .then(({note}) => this.mySetState(note));
     }

    //  if(this.props.body !== newProps.body) {
    //    let contentState;
    //    if (typeof newProps.body === 'string') {
    //      contentState = ContentState.createFromText(newProps.body);
    //    } else if (newProps.body.blocks) {
    //      contentState = convertFromRaw(newProps.body);
    //    }
    //    const body = EditorState.createWithContent(contentState);
     //
    //    this.setState({body});
    //  }
   }

  update(field) {
    return value => this.setState({[field]: value});
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState,
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
    console.log('saving!');
    console.log(this.state);

    e.preventDefault();
    const note = merge({}, this.state);
    note.body = JSON.stringify(note.body);
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
