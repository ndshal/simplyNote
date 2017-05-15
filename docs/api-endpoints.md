# API Endpoints

## HTML API
### Root
  - `GET /` loads React app

## JSON API
### Users
  - `POST api/users` - create new account
### Session
  - `POST api/session` - log in
  - `DELETE api/session` - log out
### Notes
  - `GET api/notes` - notes index
  - `GET api/notes/:noteId` - notes show
  - `POST api/notes` - create note
    - If adding a tag that does not exist, tag will be created
  - `PATCH api/notes/:noteId` - update note
    - If adding a tag that does not exist, tag will be created
  - `DELETE api/notes/:noteId` - delete note
### Notebooks
  - `GET api/notebooks` - notebooks index
  - `GET api/notebooks/:notebookId` - get single notebook
  - `GET api/notebooks/:notebookId/notes` - index of notes for single notebook
  - `PATCH api/notebooks/:notebookId` - update notebook
  - `DELETE api/notebooks/:notebookId` - delete notebook, dependent destroy notes
### Tags
  - `GET api/tags` - tags index
    - list of all tags for made by current user.
    - Have button to fetch tags created by other users (?)
  - `GET api/tags/:tagId/notes` - index of notes with tag
  - `DELETE api/tags/:tagId` - delete tag, do not dependent destroy notes

**Note:** Later, may want to refactor and nest `tag` routes under `notes`, to allow selecting notes by more than one tag, e.g. via query_string to `api/notes/:noteId`
