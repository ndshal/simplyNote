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
    this.focus = () => this.refs.editor.focus();

    this.onChange = props.update('body');
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.props.editorState,
      command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth));
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  render () {
    const {editorState, title, update} = this.props;

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

        <input
          className='note-title'
          onChange={(e) => update('title')(e.target.value)}
          value={title}
          placeholder='title your note...'
          ref="title"
        />

        <Editor
          className='editor'
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onTab={this.onTab}
          onChange={this.onChange}
          placeholder="Just start typing!"
          ref="editor"
          spellCheck={true}
        />
      </div>
    );
  }
}

export default RichEditor;
