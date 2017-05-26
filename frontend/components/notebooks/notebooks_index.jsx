import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { filterItemsBySearchTerm } from '../../reducers/selectors';
import NotebookIndexItem from './notebook_index_item';


class NotebooksIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
    this.handleChange = e => this.setState({searchTerm: e.target.value});
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  render () {
    const { deleteNotebook } = this.props;
    const { searchTerm } = this.state;

    const notebooks = filterItemsBySearchTerm(this.props.notebooks, 'name', searchTerm);

    return(
      <aside className='notebooks-index'>
        <header>
          <div className='header-title'>Notebooks</div>
            <Link to='/home/notebooks/new'>
              <i className="fa fa-plus"></i>
            </Link>
            <form>
              <input
                className='search-bar'
                value={searchTerm}
                onChange={this.handleChange}
                placeholder='Search by notebook title'/>
            </form>
        </header>
        <ul className='notebooks-list'>
          { notebooks.map(
            notebook => <NotebookIndexItem
            key={notebook.id}
            linkPath={`/home/notebook/${notebook.id}`}
            deleteNotebook={()=>deleteNotebook(notebook.id)}
            {...notebook} />) }
        </ul>
      </aside>
    );
  }
}

export default NotebooksIndex;
