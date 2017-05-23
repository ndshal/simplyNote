import React, { Component } from 'react';
import { values } from 'lodash';

class NotebookSelect extends Component {
  constructor(props) {
    super(props);
    this.state={listView: false};

    this.toggleListView = this.toggleListView.bind(this);
    this.isCurrentNotebook = this.isCurrentNotebook.bind(this);
  }

  toggleListView() {
    this.setState({listView: !this.state.listView});
  }

  isCurrentNotebook(notebook) {
    return notebook.id === this.props.value;
  }

  render() {
    let { notebooks, value, update } = this.props;
    let currentTitle = '';
    if (notebooks[value]) {
      currentTitle = notebooks[value].title;
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
        <ul className={ulClass}>
          <li key={0} className='selector-header'>Notebooks</li>
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
                  {notebook.title}
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
