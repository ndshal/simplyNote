
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
import createMathjaxPlugin from 'draft-js-mathjax-plugin';

const emojiPlugin = createEmojiPlugin();
const mathjaxPlugin =createMathjaxPlugin({completion: 'none'});

const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const plugins = [mathjaxPlugin];

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = createEmptyNote(this.props.location.pathname);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.focusBody = () => {if (this.refs.editor) { this.refs.editor.focusBody();}};
  }

   componentDidMount() {
     if(this.props.formType === 'edit') {
       this.props.fetchNote()
       .then(({note}) => this.setState(
         createEditorNoteBody(note),
         this.focusBody
        )
      );
     }

     this.saveInterval = setInterval(this.handleSave, 8000);
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       if(newProps.formType === 'new') {
         this.setState(
           createEmptyNote(this.props.location.pathname),
           this.refs.editor.focusTitle
         );
       } else {
         newProps.fetchNote()
         .then(({note}) => this.setState(
           createEditorNoteBody(note),
           this.refs.editor.focusBody
         ));
       }
     }
   }

   componentWillUnmount() {
     clearInterval(this.saveInterval);
   }

  update(field) {
    return (value, cb) => this.setState({[field]: value}, cb);
  }

  processForm(note) {
    if(this.props.formType === 'edit') {
      return this.props.updateNote(note);
    } else {
      const path = this.props.location.pathname;
      const indexPath = path.match(/(.*)\/\d*/)[1];

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

  handleSubmit(e) {
    e.preventDefault();
    const note = createRawNoteBody(this.state);
    this.processForm(note);
  }

  renderErrors() {
    const { errors } = this.props;
    const errClass = errors.length === 0 ? 'hidden' : 'note-errors';
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
    const { title, body, notebook_id, tag_names } = this.state;
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

        <EmojiSuggestions />

        {this.renderLoader()}

        <button
          onClick={this.handleSubmit}>Save Note</button>
      </from>
    );
  }
}

export default withRouter(NoteDetail);
