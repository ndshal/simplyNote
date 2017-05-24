
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

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = createEmptyNote(this.props.location.pathname);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     if(this.props.formType === 'edit') {
       this.props.fetchNote()
       .then(({note}) => this.setState(
         createEditorNoteBody(note),
         this.refs.editor.focusBody
        )
      );
     }
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

  update(field) {
    return (value, cb) => this.setState({[field]: value}, cb);
  }

  processForm(note) {
    if(this.props.formType === 'edit') {
      this.props.updateNote(note);
    } else {
      const path = this.props.location.pathname;
      const indexPath = path.match(/(.*)\/\d*/)[1];

      this.props.createNote(note)
        .then(({note}) => this.props.history.push(`${indexPath}/${note.id}`))
        .then(this.props.clearErrors);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = createRawNoteBody(this.state);
    this.processForm(note);
  }

  render() {
    const { title, body, notebook_id, tag_names } = this.state;

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>

        <div className='editor-controls'>
          <TagSelectorContainer
            tagNames={tag_names}
            onChange={this.update('tag_names')}
            />

          <NotebookSelectorContainer
            value={notebook_id}
            update={this.update('notebook_id')}
          />

          <InlineStyleControls
            editorState={body}
            onChange={this.update('body')}
          />

          <BlockStyleControls
            editorState={body}
            onChange={this.update('body')}
          />
        </div>

        <RichEditor
          title={title}
          update={this.update}
          editorState={body}
          ref="editor"
        />
        <button
          onClick={this.handleSubmit}>Save Note</button>
      </from>
    );
  }
}

export default withRouter(NoteDetail);
