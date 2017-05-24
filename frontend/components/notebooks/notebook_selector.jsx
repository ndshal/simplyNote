import React, { Component } from 'react';
import { values, merge } from 'lodash';

class NotebookSelect extends Component {
  constructor(props) {
    super(props);
    this.state={listView: false};

    console.log(this.props);

    this.toggleListView = this.toggleListView.bind(this);
    this.closeListView = this.closeListView.bind(this);
    this.isCurrentNotebook = this.isCurrentNotebook.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  componentWillUpdate(newProps, newState) {
    if( newState.listView) {
      this.refs.listView.focus();
    }
  }

  closeListView() {
    this.setState({listView: false});
  }

  toggleListView() {
    this.setState({listView: !this.state.listView});
  }

  isCurrentNotebook(notebook) {
    return notebook.id === this.props.value;
  }

  render() {
    let { notebooks, value, update, currentTitle } = this.props;

    let ulClass = 'hidden';
    if (this.state.listView) {
      ulClass = 'notebook-selector-ul';
    }

    return (
      <div className='notebook-selector'>
        <button
          className='notebook-selector-btn'
          onMouseDown={this.toggleListView}>
          <i className="fa fa-book"></i>
          <span>{currentTitle}</span>
        </button>
        <ul
          className={ulClass}
          tabIndex="0"
          onBlur={this.closeListView}
          ref='listView'>
          <li key={0} className='notebook-selector-header'>
            <div className='notebook-selector-header-text'>
              notebooks
            </div>
          </li>
          {
            values(notebooks).map(notebook => {
              let liClass='notebook-selector-item';
              if (this.isCurrentNotebook(notebook)) {
                liClass += ' current-notebook';
              }
              return (
                <li
                  className={liClass}
                  key={notebook.id}
                  onClick={() => update(notebook.id, this.closeListView)}>
                  <div className='notebook-selector-text'>
                    {notebook.name}
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default NotebookSelect;
