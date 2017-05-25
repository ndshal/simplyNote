import React from 'react';

export const POSSIBLE_BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

export const BLOCK_TYPES = [
  {
    label: 'ol',
    icon: <li className='fa fa-list-ol'></li>,
    style: 'ordered-list-item',
  },
  {
    label: 'ul',
    icon: <li className='fa fa-list-ul'></li>,
    style: 'unordered-list-item',
  },
  {label: 'Code Block', icon: <span>code</span>, style: 'code-block'},
];

export const INLINE_STYLES = [
  {
    label: 'bold',
    icon: <i className='fa fa-bold'></i>,
    style: 'BOLD'
  },
  {
    label: 'italic',
    icon: <i className='fa fa-italic'></i>,
    style: 'ITALIC'
  },
  {
    label: 'underline',
    icon: <i className='fa fa-underline'></i>,
    style: 'UNDERLINE'
  },
  {
    label: 'strikethrough',
    icon: <i className='fa fa-strikethrough'></i>,
    style: 'STRIKETHROUGH'
  },
  {
    label: 'highlight',
    icon: <i className='fa fa-pencil'></i>,
    style: 'HIGHLIGHT'
  }
];
