# SimplyNote

[Heroku][heroku]

[Trello][trello]

[heroku]: https://simplynote.herokuapp.com
[trello]: https://trello.com/b/FotzNacu/simplynote

## Minimum Viable Product

SimplyNote is a web application inspired by Evernote, with a Ruby on Rails
backend and a React/Redux frontend. By the end of Week 9, this app will,
at minimum, support the following features with smooth, bug-free
navigation, adequate seed data and sufficient CSS styling:

- [ ] New account creation, login, guest/demo login
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Notes
- [ ] Notebooks
- [ ] Tags
- [ ] Rich-text editing
- [ ] **Bonus:** Search
- [ ] **Bonus:** Autosave and change-logs for notes

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [Sample State][sample-state]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend Setup, Front-End User Authentication (2 days)
**Objective:** Functional Rails app with front end auth. Adequate styling
of login/signup form, and placeholder home page.

**Goal Completion Date:** Wed, May 17 (w8d3)

### Phase 2: Notes API, Home page with nav bar and notes index (2 days)
**Objective:** CRUD resources for plaintext notes through Rails API.
Home page with nav bar, notes index, and note detail view.

**Goal Completion Date:** Fri, May 19 (w8d5)

### Phase 5: Rich Text Editing of Notes (2 days)
**Objective:** Replace notes view and editing with a WYSIWYG text editor,
either [Draft.js][draft] or [Quill.js][quill]/[react-quill][react-quill].
Update database structure to allow notes to be saved with styling.

**Goal Completion Date:** Tues, May 25 (w9d2)

### Phase 3: Notebooks API, notebooks index (1 day)
**Objective:** Users can create notebooks, filter notes by notebooks.
Adequately styled views for notebooks index and home page with notes
belonging to one particular notebook.

**Goal Completion Date:** Wed, May 22 (w9d3)

### Phase 4: Tags API, tags index (1 day)
**Objective:** Users can create tags, attach multiple tags to one note.
Adequately styled views for tags index and home page with notes
belonging to one particular tag.

**Goal Completion Date:** Thurs, May 23 (w9d4)

[draft]: https://github.com/facebook/draft-js
[quill]: https://quilljs.com/
[react-quill]: https://github.com/zenoamaro/react-quill

### Phase 6: Styling updates, end-to-end testing, bonus features (1 day)
**Objective:** Deploy functioning full stack app!

**Goal Completion Date:** Fri, May 26 (w9d5)

### Potential Bonus Features (TBD)
- [ ] Notes search, with separate search results view
- [ ] Autosave and change-logs/history for notes
- [ ] Filter notes by several tags at once (will need to refactor api routing)
- [ ] Add functionality to render LaTex in notes
- [ ] Write tests
