# SimplyNote

[SimplyNote][live-link] is a note-editing and organization application inspired by [Evernote][evernote]. It is a full-stack, single-page, web application built using Ruby on Rails, a PostGreSQL database, and React/Redux.

## Features
  * User accounts, with secure authentication both on the backend and on the frontend.
  * Users can create, and edit and delete notes using a built-in RichText editor.
  * Notes are autosaved regularly.
  * Notebooks hold notes, and notes can be filtered by notebook.
  * Notes can be tagged with multiple user defined tags.

### Note Rendering and Editing
The main page of SimplyNote consists of an index of all saved notes and a editor component.

```
image
```

On entering the page, the index fetches notes already in the database by dispatching an AJAX request to the Rails API. The index component then renders the list of notes, sorted by the most recently updated. In order to save memory on the frontend, only the basic details of notes are fetched.

Clicking each note in the index list will bring up a detailed view in the editor. This is again accomplished with an AJAX request to Rails, this time dispatched by the editor component.

The editor allows for various styling options (bold, highlighting, lists, etc) and is implemented using the [Draft.js][draft] open source library, which was developed at Facebook.

```
draft.js giphy demo
```

To streamline the note-taking process, notes are automatically saved and sent back to the database. Before sending the note to the database, SimplyNote packages the current editor state, which includes both text content and styling, into a JSON object that is then processed and stored by Rails.

The order of operations follows Redux cycle methodology - the noteDetail React component dispatches an Action, which sends an AJAX request to update the Rails database. The Rails response is then parsed and saved into the Redux state, which updates the noteDetail component.

```js
//note_detail.js
handleSave() {
  if(this.state.title !== '') {
    this.setState({saved: false});

    setTimeout(()=> {
      const note = createRawNoteBody(this.state);
      this.updateNote(note)
        .then(() => this.setState({saved: true}));
    }, 1500);
  }
}

//notes_actions.js
export const updateNote = note => dispatch => (
  NoteAPIUtil.updateNote(stringifyNoteBody(note))
    .then(note => dispatch(receiveSingleNote(parseNoteBody(note))))
);

//note_api_util.js
export const updateNote = note => {
  return $.ajax({
    method: 'PATCH',
    url: `api/notes/${note.id}`,
    data: { note }
  });
};
```

On the backend, notes are stored in a PostgreSQL table, with columns corresponding to `id`, `title`, `body`, `notebook_id`, and `updated_at`. `body` is the packaged editor state, and `notebook_id` is a reference to the notebook that contains the note.

### Filtering notes by notebook

Users have the option to organize their notes into notebooks. On the backend there is a separate database table, model, and controller for notebooks. The relationships between the `Note`, `Notebook` and `User` models are then setup using Rails associations:

  * a user `has_many` notebooks
  * a notebook `has_many` notes
  * a note `belongs_to` a single notebook

On the frontend, the `/notebooks` page contains an index component that fetches and renders a list of the current users notebooks. From this page, users can create or delete notebooks. Selecting a particular notebook shows the main notes page, but with the note list filtered to show only the notes in the selected notebook.

For convenience, every user starts with a personal notebook, which is created when they first create an account. By default, a new note will be placed in this personal notebook, but users can always choose which notebook they are working in via a drop-down menu above the main note editor.

```
Image of notebook dropdown, or giphy demo of notebook changing.
```

## Project Design

SimplyNote was designed and built in a two week period. View the original [proposal][dev-readme], which includes MVP features, an implementation timeline and more extensive documentation.

## Technologies

  * Rails, MVC, RESTful API
  * React.js, Redux methodology (list dependencies like react-router v4, yarn?)
  * Communication with AJAX requests dispatched from the frontend by jQuery
  * Draft.js, an open source RTF editor created by facebook
  * BCrypt

## Future Directions
  * Note sharing between Users
  * Improved search Fuzy.js
  * change-logs
  * testings / accessibility

[draft]: https://draftjs.org
[evernote]: https://evernote.com/
[dev-readme]: docs/README.md
[live-link]: https://simplynote.herokuapp.com/
