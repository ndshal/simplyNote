import React, { Component } from 'react';
import { merge } from 'lodash';

class TagSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {currentTags: [], tagInput: ''};

    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({currentTags: newProps.tags});
  }

  onChange(e) {
    this.setState({tagInput: e.target.value});
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
      const newTags = merge([], this.state.currentTags);
      newTags.push(this.state.tagInput);
      this.setState({
        currentTags: newTags,
        tagInput: ''
      });
    }
  }

  render () {
    let { currentTags, tagInput } = this.state;

    return(
      <div className='tag-selector'>
        <i className='fa fa-tag'></i>
        <ul className='current-tags'>
          {currentTags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <input
          value={tagInput}
          onKeyPress={this.handleKeyPress}
          onChange={this.onChange}
          placeholder='+'
          />
      </div>
    );
  }
}

export default TagSelector;
