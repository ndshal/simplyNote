import React from 'react';
import { RichUtils } from 'draft-js';
import StyleButton from './style_button';
import { INLINE_STYLES, BLOCK_TYPES } from './editor_styles';

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  HIGHLIGHT: {
    background: 'rgba(243,243,21,1.0)',
   }
};

export const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'editor-blockquote';
    default: return null;
  }
};

export const InlineStyleControls = ({editorState, onChange}) => {
  const toggleInlineStyle = (inlineStyle) => (
    onChange(
      RichUtils.toggleInlineStyle(editorState, inlineStyle)
    )
  );
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="inline-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.icon}
          onToggle={toggleInlineStyle}
          style={type.style}
        />
      )}
    </div>
  );
};

export const BlockStyleControls = ({editorState, onChange}) => {
  const toggleBlockType = (blockType) => (
    onChange(
      RichUtils.toggleBlockType(editorState, blockType)
    )
  );

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
          onToggle={toggleBlockType}
          style={type.style}
        />
      )}
    </div>
  );
};
