import React, { Component } from 'react';
import { values } from 'lodash';

class NotebookSelect extends Component {
  constructor(props) {
    super(props);
    this.state={listView: false};

    this.toggleListView = this.toggleListView.bind(this);
    this.closeListView = this.closeListView.bind(this);
    this.isCurrentNotebook = this.isCurrentNotebook.bind(this);
  }

  closeListView() {
    this.setState({listView: false});
  }

  toggleListView() {
    this.setState(
      {listView: !this.state.listView},
      () => {if(this.state.listView) {
        this.refs.listView.focus();
      }}
    )
  }

  isCurrentNotebook(notebook) {
    return notebook.id === this.props.value;
  }

  render() {
    let { notebooks, value, update } = this.props;
    let currentTitle = '';
    if (notebooks[value]) {
      currentTitle = notebooks[value].name;
    }
    notebooks = values(notebooks);
    let ulClass = 'hidden';
    if (this.state.listView) {
      ulClass = 'notebook-selector-ul';
    }

    return (
      <div className='notebook-selector'>
        <button
          className='notebook-selector-btn'
          onClick={this.toggleListView}>
          <i className="fa fa-book"></i>
          <span>{currentTitle}</span>
        </button>
        <ul
          className={ulClass}
          tabIndex="0"
          onBlur={this.closeListView}
          ref="listView">
          <li key={0} className='notebook-selector-header'>
            <div className='notebook-selector-header-text'>
              notebooks
            </div>
          </li>
          {
            notebooks.map(notebook => {
              let liClass='notebook-selector-item';
              if (this.isCurrentNotebook(notebook)) {
                liClass += ' current-notebook';
              }
              return (
                <li
                  className={liClass}
                  key={notebook.id}
                  onClick={() => update(notebook.id)}>
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
