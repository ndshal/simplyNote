import React from 'react';
import StyleButton from './style_button';

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

export const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'editor-blockquote';
    default: return null;
  }
};

const INLINE_STYLES = [
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
  }
];

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="inline-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

const POSSIBLE_BLOCK_TYPES = [
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

const BLOCK_TYPES = [
  {
    label: 'ol',
    icon: <li className='fa fa-list-ol'></li>,
    style: 'ordered-list-item',
  },
  {
    label: 'ul',
    icon: <li className='fa fa-list-ul'></li>,
    style: 'unordered-list-item',
  }
];

export const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="block-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
