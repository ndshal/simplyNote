import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotesIndexContainer from './notes_index_container';
import NoteDetailContainer from './note_detail_container';

class Notes extends Component {
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

  fullScreenBtn() {
    let iconClass;
    if(this.state.fullScreen) {
      iconClass = 'fa fa-compress';
    } else {
      iconClass = 'fa fa-expand';
    }

    return (
      <button
        className='fullscreen-toggle'
        onClick={this.toggleFullScreen}>
        <i className={iconClass}></i>
      </button>
    );
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render (){
    const { url, filter } = this.props;
    let className='notes';
    if(this.state.fullScreen) {
      className += ' detail-full-screen';
    }

    return (
      <section className={className}>
        <NotesIndexContainer url={url} filter={filter}/>
        <Route path={`${url}/:noteId`} component={NoteDetailContainer} />

        {this.fullScreenBtn()}
      </section>
    );
  }
}

export default Notes;
