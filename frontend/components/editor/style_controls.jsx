import React from 'react';
import StyleButton from './style_button';

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
];

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="editor-controls">
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
