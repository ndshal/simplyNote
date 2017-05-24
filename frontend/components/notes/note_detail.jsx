
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  createEditorNoteBody,
  createRawNoteBody,
  createEmptyNote
} from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';
import TagSelector from '../tags/tag_selector';

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = createEmptyNote();
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     if(this.props.formType === 'edit') {
       this.props.fetchNote()
       .then(({note}) => this.setState(
         createEditorNoteBody(note),
         this.refs.form.focusBody
        )
      );
     }
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       if(newProps.formType === 'new') {
         this.setState(
           createEmptyNote(),
           this.refs.form.focusTitle
         );
       } else {
         newProps.fetchNote()
         .then(({note}) => this.setState(
           createEditorNoteBody(note),
           this.refs.form.focusBody
         ));
       }
     }
   }

  update(field) {
    return value => this.setState({[field]: value});
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

        <TagSelector
          tagNames={tag_names}
          onChange={this.update('tag_names')}
          />

        <RichEditor
          title={title}
          notebooks={this.props.notebooks}
          notebookId={notebook_id}
          update={this.update}
          editorState={body}
          ref="form"
        />
        <button
          onClick={this.handleSubmit}>Save Note</button>
      </from>
    );
  }
}

export default withRouter(NoteDetail);
