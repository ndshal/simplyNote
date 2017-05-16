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
- [ ] Page starts at either /signin or /home

## Demo User
- [ ] Backend user object
- [ ] Store somewhere on frontend (bootstrap it?)
- [ ] Demo button fills out form

## Style
 - [ ] Nav with logo (placeholder for now)
 - [ ] Splash Screen?



### Some External Packages
* draft.js (rtf)
* quill.js / react-quill (rtf)
* react-latex
