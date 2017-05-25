import React, { Component } from 'react';
import { merge } from 'lodash';

class TagSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {tagInput: ''};

    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  onChange(e) {
    this.setState({tagInput: e.target.value});
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
      const newTags = merge([], this.props.tagNames);
      if (!newTags.includes(this.state.tagInput)) {
        newTags.push(this.state.tagInput);
      }
      this.props.onChange(newTags, this.setState({tagInput: ''}));
    } else if (e.which === 9) {
      e.preventDefault();
      this.setState({tagInput: ''}, () => this.props.focusBody());
    }
  }

  removeTag(tagName) {
    let newTags = [];
    this.props.tagNames.forEach(tag => {if (tag !== tagName) newTags.push(tag)});
    this.props.onChange(newTags);
  }

  render () {
    let { tagInput } = this.state;
    let { tagNames } = this.props;

    return(
      <div className='tag-selector'>
        <i className='fa fa-tag'></i>
        <ul className='current-tags'>
          {tagNames.map(tagName => (
            <li
              key={tagName}
              className='note-tag'>
              <span>{tagName}</span>
              <i
                className='fa fa-times'
                onClick={() => this.removeTag(tagName)}></i>
            </li>
          ))}
        </ul>
        <input
          value={tagInput}
          onKeyDown={this.handleKeyPress}
          onChange={this.onChange}
          placeholder='+'
          size={tagInput.length+1}
          />
      </div>
    );
  }
}

export default TagSelector;
