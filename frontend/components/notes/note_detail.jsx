import React, { Component } from 'react';
import RichEditor from '../editor/editor';

class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: {},
    };

    this.update = this.update.bind(this);
  }

   componentDidMount() {
     this.props.fetchNote();
   }

   componentDidUpdate(){
     console.log('form updated!');
   }

   componentWillReceiveProps(newProps) {
     if(this.props.pathId !== newProps.pathId) {
       newProps.fetchNote();
     }
   }

  update(field) {
    return value => this.setState({[field]: value});
  }

  render() {
    const { title, body } = this.props.note;

    return (
      <from
        className='note-detail'>
        <input
          onChange={(e) => this.update('title')(e.target.value)}
          value={this.state.title}
          placeholder='title your note...'/>

        <RichEditor
          content={body}
          onChange={this.update('body')} />
      </from>
    );
  }
}

export default NoteDetail;
