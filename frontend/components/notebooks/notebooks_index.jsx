import React, { Component } from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebooksIndex extends Component {
  render () {
    const { notebooks, deleteNote } = this.props;
    return(
      <aside className='notebooks-index'>
        <header>
          <div className='header-title'>Notebooks</div>
        </header>
        <ul className='notebooks-list'>
          { notebooks.map(
            notebook => <NotebookIndexItem
            key={notebook.id}
            linkPath={`/home/notebook/${notebook.id}/notes`}
            deleteNotebook={()=>deleteNote(notebook.id)}
            {...notebook} />) }
        </ul>
      </aside>
    );
  }
}

export default NotebooksIndex;
