## Wireframes
- [x] login/signup
- [x] home/all notes
  - flesh out notes header
- [x] new note/ note detail view
- [x] Notebooks
- [x] new Notebooks
- [x] Tags
- [x] new tag
- [x] home with selected notebook / tag

## Docs
- [x] Component Hierarchy
    --> Too nested?
- [x] Sample Redux State
- [x] DB Schema
- [x] API Endpoints
- [x] Implementation Timeline
- [x] Trello board

# Phase 0: Heroku
 - [x] Host on heroku

# Phase 1: Auth
## Backend
- [x] User model, database and model level validations
- [x] User and Session routes and controllers, nested under api/
- [x] Login/Logout methods

## Frontend
- [x] Session API Util
- [x] Session reducer, session state shape
  - keep session in one slice of state, or split into
    currentUserReducer and formsReducer (takes errors, formType)
- [x] Session Form and Auth / Protected routes
- [x] Bootstrap currentUser
- [x] Page starts at either /signin or /home

## Demo User
- [x] Backend user object
- [x] Store somewhere on frontend (bootstrap it?)
   - Currently in session form, ask Luke!
- [x] Demo button fills out form

## Style
 - [x] Nav with logo (placeholder for now)
 - [x] Splash Screen
 - [x] Footer for Splash Screen?

# Phase 2: Notes
## Backend
- [x] Notes model, database and model level validations
- [x] Notes controller, with CRUD API resources
- [x] Decide if index should not fetch entire not contents

## Frontend
- [x] Notes API util, actions, reducer
- [x] Refactor state so that show page is own slice
- [x] NotesIndex
- [x] NotesIndexItem
  * Delete Button -> Form delete button, redirect to /notes,
  index will take care of showing a new note!
- [x] Modal for delete button
- [x] Style index
- [x] NotesDetail
- [x] New note
- [x] Sort notes by date
- [x] Clear notes from state on logout

## Style
- [x] Nav, labels on links
- [x] Fix icon jiggling in nav
- [x] Outlines on index items
- [x] Edit form
- [x] Fullscreen edit form
- [ ] New form starts fullscreen
  * maybe refactor the whole new form route

# Phase 3: RTF Editing
## Backend
- [x] Note Body is a json object in database

## Frontend
- [x] note API utils parse json before and after ajax requests
- [x] DraftJS editor component in note detail form
- [x] Refactor editor Component
 - idea: editor does not have its own state, just passes state to parent
- [x] Rerenders index on save
- [ ] Style editor
- [x] Tab focus in editor
- [x] Placeholder in edit form is not clickable.
- [ ] More functions in editor

# Phase 4: Notebooks
## Backend
  - [ ] Notebook model, associations, maybe even nest the notes route
  - [ ] Use params[:filter] to filter 'api_notes#index' results
