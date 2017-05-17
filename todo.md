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
 - [ ] Footer for Splash Screen?

# Phase 2: Notes
## Backend
- [x] Notes model, database and model level validations
- [x] Notes controller, with CRUD API resources
- [ ] Decide if index should not fetch entire not contents
  **Fetch only currentUser's notes**

## Frontend
- [x] Notes API util, actions, reducer
- [ ] NotesIndex, NotesIndexItem, NotesDetail components

# Phase 3: Notebooks
## Backend
 - [ ] Use params[:filter] to filter 'api_notes#index' results

### Some External Packages
* draft.js (rtf)
* quill.js / react-quill (rtf)
* react-latex
