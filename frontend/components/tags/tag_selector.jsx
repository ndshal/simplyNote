import React, { Component } from 'react';
import { merge } from 'lodash';

class TagSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {tagInput: ''};

    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
      newTags.push(this.state.tagInput);
      this.props.onChange(newTags);
    }
  }

  render () {
    let { tagInput } = this.state;
    let { tagNames } = this.props;

    return(
      <div className='tag-selector'>
        <i className='fa fa-tag'></i>
        <ul className='current-tags'>
          {tagNames.map(tagName => <li key={tagName}>{tagName}</li>)}
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
