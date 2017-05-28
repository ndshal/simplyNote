
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  createEditorNoteBody,
  createRawNoteBody,
  createEmptyNote
} from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';
import { InlineStyleControls, BlockStyleControls } from '../editor/style_controls';
import TagSelectorContainer from '../tags/tag_selector_container';
import NotebookSelectorContainer from '../notebooks/notebook_selector_container';

import createEmojiPlugin from 'draft-js-emoji-plugin';
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin]

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = createEmptyNote(this.props.location.pathname);
    this.state.loaded = false;

    this.update = this.update.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.loadNote = this.loadNote.bind(this);

    this.focusTitle = () => {if (this.refs.editor) { this.refs.editor.focusTitle();}};
    this.focusBody = () => {if (this.refs.editor) { this.refs.editor.focusBody();}};
  }

   componentDidMount() {
     this.loadNote(this.props);

     this.saveInterval = setInterval(this.handleSave, 8000);
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       this.loadNote(newProps);
     }
   }

   componentWillUnmount() {
     clearInterval(this.saveInterval);
   }

  loadNote(props) {
    if(props.formType === 'new') {
      this.setState(
        createEmptyNote(props.location.pathname),
        this.focusTitle
      );
    } else {
      props.fetchNote().then(
        ({note}) => this.setState(
          createEditorNoteBody(note),
          this.focusBody
        )
      );
    }
  }

  update(field) {
    return (value, cb) => this.setState({[field]: value}, cb);
  }

  processForm(note) {
    if(this.props.formType === 'edit') {
      return this.props.updateNote(note);
    } else {
      const path = this.props.location.pathname;
      const indexPath = path.match(/(.*)\/new/)[1];

      return this.props.createNote(note)
        .then(({note}) => this.props.history.push(`${indexPath}/${note.id}`))
        .then(this.props.clearErrors);
    }
  }

  handleSave() {
    if(this.state.title !== '') {
      this.setState({saved: false});

      setTimeout(()=> {
        const note = createRawNoteBody(this.state);
        this.processForm(note)
          .then(() => this.setState({saved: true}));
      }, 1500);
    }
  }

  renderErrors() {
    const { errors } = this.props;
    const errClass = errors.length === 0 ? 'hidden' : 'create-errors';
    return (
      <div className={errClass}>{errors.join(', ')}</div>
    );
  }

  renderLoader() {
    const loaderClass = this.state.saved ? 'saved loader' : 'saving loader';
    return (
      <div className={loaderClass}>
      <i className='fa fa-check'></i>
      </div>
    );
  }

  render() {
    const { title, body, notebook_id, tag_names, loaded } = this.state;
    if (!this.state.loaded) {
      return(
        <form
          className='note-detail loading'>
          <div className='loader onfetch'></div>
        </form>
      );
    }

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>

        {this.renderErrors()}

        <div className='editor-controls'>
          <NotebookSelectorContainer
            value={notebook_id}
            update={this.update('notebook_id')}
          />

        <TagSelectorContainer
          tagNames={tag_names}
          onChange={this.update('tag_names')}
          focusBody={this.focusBody}
          />

          <InlineStyleControls
            editorState={body}
            onChange={this.update('body')}
          />

          <BlockStyleControls
            editorState={body}
            onChange={this.update('body')}
          />

          <EmojiSelect />
        </div>

        <RichEditor
          title={title}
          update={this.update}
          editorState={body}
          plugins={plugins}
          ref="editor"
        />

        {this.renderLoader()}
      </from>
    );
  }
}

export default withRouter(NoteDetail);
