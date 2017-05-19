import React, { Component } from 'react';
import { Editor, RichUtils } from 'draft-js';
import { InlineStyleControls, BlockStyleControls } from './style_controls';

class RichEditor extends Component {
  constructor(props) {
    super(props);

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.onTab = this.onTab.bind(this);
    this.focus = this.focus.bind(this);
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

  onTab(e) {
    const maxDepth = 2;
    this.props.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth));
  }

  focus() {
    this.refs.editor.focus();
  }

  toggleInlineStyle(inlineStyle) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  toggleBlockType(blockType) {
    this.props.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  render () {
    const {editorState} = this.props;

    return (
      <div className='editor-root'>
        <div className='editor-controls'>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />

          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
        </div>

        <Editor
          className='editor'
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onTab={this.onTab}
          onChange={this.props.onChange}
          placeholder="Just start typing!"
          ref="editor"
        />
      </div>
    );
  }
}

export default RichEditor;
