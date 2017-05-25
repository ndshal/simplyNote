import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sortItemsByName } from '../../reducers/selectors';
import TagIndexItem from './tag_index_item';

class TagsIndex extends Component {
  componentDidMount() {
    this.props.fetchAllTags();
  }

  renderTags () {
    const { tags, deleteTag } = this.props;
    const sortFunc = (a,b) => {
      if(a < b) { return -1; }
      else if(a > b) { return 1; }
      else { return 0; }
    };

    const sortedLetters = Object.keys(tags).sort(sortFunc);

    return (
      <ul className='tags-list'>
      {
        sortedLetters.map(letterKey => (
          <li key={letterKey}>
            <span className='letter-label'>{letterKey}</span>
            <ul className='tags-by-letter-ul'>
              {sortItemsByName(tags[letterKey]).map(
                tag=> <TagIndexItem
                  key={tag.id}
                  linkPath={`/home/tag/${tag.id}`}
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
