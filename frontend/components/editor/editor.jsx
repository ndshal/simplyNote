import React, { Component } from 'react';
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
  ContentState
} from 'draft-js';
import { InlineStyleControls } from './style_controls';

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => {
      console.log('-----EDITOR STATE-----');
      console.log(convertToRaw(editorState.getCurrentContent()));
      console.log('-----EDITOR STATE-----');


      this.setState(
        {editorState},
        () => this.props.updateForm(convertToRaw(editorState.getCurrentContent()))
      );

    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.content !== this.props.content) {
      let contentState;
      if (typeof newProps.content === 'string') {
        contentState = ContentState.createFromText(newProps.content);
      } else if (newProps.content.blocks) {
        contentState = convertFromRaw(newProps.content);
      }
      const editorState = EditorState.createWithContent(contentState);

      this.setState({editorState});
    }
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState,
      command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  handleExport(e) {
    e.preventDefault();
    console.log(this.state.editorState);
    const contentState = this.state.editorState.getCurrentContent();
    console.log(contentState);
    console.log(convertToRaw(contentState));
  }

  render() {
    console.log('rendering editor');

    const {editorState} = this.state;

    return (
      <div className="RichEditor-root">
        <button onClick={this.handleExport}> Log State </button>

        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className="RichEditor-editor">
          <Editor
            className='editor'
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default RichEditor;
