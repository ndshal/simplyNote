import React, { Component } from 'react';
import { merge } from 'lodash';
import RichEditor from '../editor/editor';

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
     this.props.fetchNote()
      .then(({note}) => this.setState(note));
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       newProps.fetchNote()
       .then(({note}) => this.setState(note));
     }
   }

  update(field) {
    return value => this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = merge({}, this.state);
    this.props.updateNote(note);
  }

  render() {
    console.log('---- STATE IN NOTE DETAIL ----');
    console.log(this.state.body);
    console.log('---- STATE IN NOTE DETAIL ----');

    return (
      <from
        className='note-detail'
        onSubmit={this.handleSubmit}>
        <input
          onChange={(e) => this.update('title')(e.target.value)}
          value={this.state.title}
          placeholder='title your note...'/>

        <RichEditor
          content={this.state.body}
          updateForm={this.update('body')} />
        <button type='submit'>Save Note</button>
      </from>
    );
  }
}

export default NoteDetail;
