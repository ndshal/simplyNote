import React, { Component } from 'react';
import NoteFormContainer from './note_form_container';

class NoteDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { fullScreen: false };
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  toggleFullScreen (){
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }

  fullScreenBtnIcon() {
    let dir;
    if(this.state.fullScreen) {
      dir = 'right';
    } else {
      dir = 'left';
    }

    return <i className={`fa fa-arrow-${dir}`}></i>
  }

  render() {
    let className='note-detail';
    if(this.state.fullScreen) {
      className += ' full-screen';
    }

    return (
      <section className={className}>
        <button
          className='fullscreen-toggle'
          onClick={this.toggleFullScreen}>
          {this.fullScreenBtnIcon()}
        </button>
        <NoteFormContainer
          match={this.props.match}/>
      </section>
    );
  }
}

export default NoteDetail;
