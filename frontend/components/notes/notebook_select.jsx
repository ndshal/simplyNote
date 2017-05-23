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
    notebook.id = this.props.notebook_id;
  }

  render() {
    let { notebooks, notebook_id } = this.props;
    let currentTitle = '';
    if (notebooks[notebook_id]) {
      currentTitle = notebooks[notebook_id].title;
    }
    notebooks = values(notebooks);
    let ulClass = 'hidden';
    if (this.state.listView) {
      ulClass = 'notebook-selector-ul';
    }

    return (
      <div className='notebook-selector'>
        <button onClick={this.toggleListView}>
          <i className="fa fa-book"></i>
          <span>{currentTitle}</span>
        </button>
        <ul className={ulClass}>
          <li key={0} className='selector-header'>Notebooks</li>
          {
            notebooks.map(notebook => {
              let className='notebook-selector-item';
              if (this.isCurrentNotebook(notebook)) {
                className += ' current-notebook';
              }
              return (
                <li
                  key={notebook.id}
                  onClick={() => this.update(notebook.id)}>
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
