import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class RichEditor extends Component {
  constructor(props) {
    super(props);

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onTab = this.onTab.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.onChange = this.props.update('body');

    this.focusTitle = this.focusTitle.bind(this);
    this.focusBody = this.focusBody.bind(this);
  }

  focusTitle() {
    this.refs.title.focus();
  }

  focusBody() {
    this.onChange(EditorState.moveFocusToEnd(this.props.editorState));
  }

  handleEnter(e) {
    if(e.which === 13) {
      e.preventDefault();
      this.focusBody();
    }
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
    this.onChange(
      RichUtils.onTab(e, this.props.editorState, maxDepth)
    );
  }

  render () {
    const {editorState, title, update} = this.props;

    return (
      <div className='editor-root'>
        <input
          className='note-title'
          onKeyPress={this.handleEnter}
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
          spellCheck={true}
        />
      </div>
    );
  }
}

export default RichEditor;
