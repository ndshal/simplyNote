import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrentNote: false,
      showDelete: false
    };

    this.toggleDeleteView = this.toggleDeleteView.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  toggleDeleteView() {
    this.setState({showDelete: !this.state.showDelete});
  }

  handleDelete() {
    const path = this.props.location.pathname;
    const indexPath = path.match(/(.*)\/\d*/)[1];

    this.props.deleteNote()
      .then(
        () => this.props.history.push(indexPath)
      );
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
            <h4>{this.props.updated_str} ago</h4>
            <button onClick={this.toggleDeleteView}>
              <i className='fa fa-trash'></i>
            </button>
            <p></p>
          </div>

          <div className={deleteClass}>
            <span>This note will be deleted. Are you sure?</span>
            <span className='delete-btns'>
              <i
                className='fa fa-times-circle'
                onClick={this.toggleDeleteView}></i>
              <i
                className='fa fa-check-circle'
                onClick={this.handleDelete}></i>
            </span>
          </div>
        </li>

    </Link>
    );
  }
}

export default withRouter(NoteIndexItem);
