
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  createEditorNoteBody,
  createRawNoteBody,
  createEmptyNote
} from '../../util/note_conversion_util';
import RichEditor from '../editor/editor';

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
    if (this.state.notebook_id === '') {
      alert('Pick a notebook first! ***this alert is temporary***');
    } else {
      this.processForm(note);
    }
  }

  render() {
    const path = this.props.location.pathname;
    const notebookMatch = path.match(/home\/notebook\/(\d+)/);
    let { title, body, notebook_id } = this.state;
    if (notebook_id === '' && notebookMatch) {
      notebook_id = parseInt(notebookMatch[1]);
    }

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>

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
