import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrentNote: false,
      showDelete: false
    };

    this.toggleDelete = this.toggleDelete.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const re = /notes\/(\d*)$/;
    const path = newProps.location.pathname;
    let isCurrentNote;
    if (!path.match(re)) {
      isCurrentNote = false;
    } else {
      isCurrentNote = parseInt(path.match(re)[1]) === newProps.id;
    }

    this.setState({isCurrentNote});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isCurrentNote && !this.state.isCurrentNote) {
      this.setState({showDelete: false});
    }
  }

  toggleDelete() {
    this.setState({showDelete: !this.state.showDelete});
  }

  render () {
    let className='index-item';
    if (this.state.isCurrentNote) {
      className += ' current-note';
    }

    let deleteClass = 'hidden';
    if (this.state.showDelete && this.state.isCurrentNote) {
      deleteClass += ' delete-view';
    }

    return (
      <Link to={this.props.linkPath}>
        <li className={className}>
          <div className='index-item-content'>
            <h3>{this.props.title}</h3>
            <h4>{this.props.updated_at} ago</h4>
            <button onClick={this.toggleDelete}>
              <i className='fa fa-trash'></i>
            </button>
            <p></p>
          </div>

          <div className={deleteClass}>
            <span>This note will be deleted. Are you sure?</span>
            <span className='delete-btns'>
              <i
                className='fa fa-times-circle'
                onClick={this.toggleDelete}></i>
              <i
                className='fa fa-check-circle'
                onClick={this.props.deleteNote}></i>
            </span>
          </div>
        </li>

    </Link>
    );
  }
}

export default withRouter(NoteIndexItem);
