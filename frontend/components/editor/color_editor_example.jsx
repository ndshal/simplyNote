import Draft from 'draft-js';
import React from 'react';

const {Editor, EditorState, Modifier, RichUtils} = Draft;

class ColorfulEditorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
  }

  _toggleColor(toggledColor) {
    const {editorState} = this.state;
    const selection = editorState.getSelection();

    const nextContentState = Object.keys(colorStyleMap)
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      }, editorState.getCurrentContent());
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );
    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }
    this.onChange(nextEditorState);
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className='root'>
        <ColorControls
          editorState={editorState}
          onToggle={this.toggleColor}
        />
      <div className='editor' onClick={this.focus}>
          <Editor
            customStyleMap={colorStyleMap}
            editorState={editorState}
            onChange={this.onChange}
            placeholder="Write something colorful..."
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let styleClass;
    if (this.props.active) {
      styleClass = `styleButton ${this.props.style}`;
    } else {
      styleClass = 'styleButton';
    }
    return (
      <span className={styleClass} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const  COLORS = [
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
  ];

  const ColorControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
      <div className='controls'>
        {COLORS.map(type =>
          <StyleButton
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  const colorStyleMap = {
    red: {
      color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
      color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
      backgroundColor: 'rgba(243,243,21, 1.0)',
      // color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
      color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
      color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
      color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
      color: 'rgba(127, 0, 255, 1.0)',
    },
  };

export default ColorfulEditorExample;
