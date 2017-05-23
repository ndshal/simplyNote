import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TagIndexItem from './tag_index_item';

class TagsIndex extends Component {
  render () {
    const { tags, deleteTag } = this.props;
    return(
      <aside className='tags-index'>
        <header>
          <div className='header-title'>Tags</div>
            <Link to='/home/tags/new'>
              <i className="fa fa-plus"></i>
            </Link>
        </header>
        <ul className='tags-list'>
          { tags.map(
            tag => <TagIndexItem
            key={tag.id}
            linkPath={`/home/tag/${tag.id}/notes`}
            deleteTag={()=>deleteTag(tag.id)}
            {...tag} />) }
        </ul>
      </aside>
    );
  }
}

export default TagsIndex;
