
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
    console.log('in update');
    return value => this.setState({[field]: value});
  }

  processForm(note) {
    if(this.props.formType === 'edit') {
      this.props.updateNote(note);
    } else {
      this.props.createNote(note)
        .then(({note}) => this.props.history.go(-2))
        .then(this.props.clearErrors);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = createRawNoteBody(this.state);
    this.processForm(note);
  }

  render() {
    const { title, body, notebook_id } = this.state;

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>

        <select
          value={notebook_id}
          onChange={e => this.update('notebook_id')(e.target.value)}>
          {
            this.props.notebooks.map(notebook => (
              <option
                key={notebook.id}
                value={notebook.id}>
                {notebook.title}</option>
            ))
          }
        </select>

        <RichEditor
          title={title}
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
