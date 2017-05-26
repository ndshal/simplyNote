# SimplyNote

[SimplyNote][live-link] is a note-editing and organization application inspired by [Evernote][evernote]. It is a full-stack web application built using Ruby on Rails, a PostGreSQL database, and React/Redux.

## Features
  * User accounts, with secure authentication both on the backend and on the frontend.
  * Users can create, and edit and delete notes using a built-in RichText editor.
  * Notes are autosaved regularly.
  * Notebooks hold notes, and notes can be filtered by notebook.
  * Notes can be tagged with multiple user defined tags

### Note Rendering and Editing
  * separate index/detail components
  * ajax, redux state
  * Draft.js, JSON parsing

### Filtering notes by notebook
  * Associations, validation
  * Filtering / notes index
  * Users have a default notebook, can move notes.

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


[evernote]: https://evernote.com/
[dev-readme]: docs/README.md
[live-link]: https://simplynote.herokuapp.com/
