import React, { Component } from 'react';
import { Editor, RichUtils } from 'draft-js';
import { InlineStyleControls } from './style_controls';

class RichEditor extends Component {
  constructor(props) {
    super(props);

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.props.editorState,
      command);
    if (newState) {
      this.props.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  toggleInlineStyle(inlineStyle) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  render () {
    const {editorState} = this.props;
    console.log(editorState);

    return (
      <div className='editor-root'>
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <Editor
          className='editor'
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.props.onChange} />
      </div>
    );
  }
}

export default RichEditor;
