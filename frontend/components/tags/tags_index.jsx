import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TagIndexItem from './tag_index_item';

class TagsIndex extends Component {
  renderTags () {
    const { tags, deleteTag } = this.props;

    return (
      <ul className='tags-list'>
      {
        Object.keys(tags).map(letterKey => (
          <li key={letterKey}>
            <span className='letter-label'>{letterKey}</span>
            <ul className='tags-by-letter-ul'>
              {tags[letterKey].map(
                tag=> <TagIndexItem
                  key={tag.id}
                  linkPath={`/home/tag/${tag.id}/notes`}
                  deleteTag={()=>deleteTag(tag.id)}
                  {...tag} />
                )
              }
            </ul>
          </li>)
        )
      }
    </ul>
    );
  }

  render () {

    return(
      <aside className='tags-index'>
        <header>
          <div className='header-title'>Tags</div>
            <Link to='/home/tags/new'>
              <i className="fa fa-plus"></i>
            </Link>
        </header>

        {this.renderTags()}
      </aside>
    );
  }
}

export default TagsIndex;
