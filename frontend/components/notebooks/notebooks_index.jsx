import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotebookIndexItem from './notebook_index_item';

class NotebooksIndex extends Component {
  render () {
    const { notebooks, deleteNotebook } = this.props;
    return(
      <aside className='notebooks-index'>
        <header>
          <div className='header-title'>Notebooks</div>
            <Link to='/home/notebooks/new'>
              <i className="fa fa-plus"></i>
            </Link>
        </header>
        <ul className='notebooks-list'>
          { notebooks.map(
            notebook => <NotebookIndexItem
            key={notebook.id}
            linkPath={`/home/notebook/${notebook.id}/notes`}
            deleteNotebook={()=>deleteNotebook(notebook.id)}
            {...notebook} />) }
        </ul>
      </aside>
    );
  }
}

export default NotebooksIndex;
