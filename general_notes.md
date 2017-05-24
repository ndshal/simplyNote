
okay, think about the state. What are the actions?

 - view all notes, not by notebook -> fetchAllNotes() -> receiveManyNotes()
 - view notes by notebook -> fetchNotesByNotebook() -> receiveManyNotes()
 - like above, but by tag.
 - view all notebooks, count notes, meaning you need to know how many notes are in the notebook
    - either they are already in state, and count on frontend,
    - or count using sql
 - view all tags, same as above. it makes sense to send an ajax request
    on rendering of notebookIndex, tagIndex.
 - then, once notebook is selected, can filter on frontend.

   --> counts in tags index / notebook index are ajax, all notes are in state and are filtered.
 - noteDetail:
    - notebookSelector needs all notebooks and currentNotebook
    - tagSelector needs all tags and currentTags
  on Save, need to update counts of notebooks and tags - potentially fetch new tags.
  can possibly do this in a lifecyle method that knows about previous props and future props - send out ajax requests. Only in noteDetail, note necessarily in tagSelector/notebookSelector?


  Render notebook save errors
  Notebook Selector
  dropdown focusing / onBlur
  users should have a default notebook
  Tags
  delete tag functionality
  decide between delete page and 'modal'
  Tags are note sorted alphabetically (are they?)
  Tag Selector
  add drop down with autocomplete
  Might still have n + 1 queries
  Editor
  block styles get applied to placeholder -> could be good or bad
  Splash screen styling


Search bars in notes, notebooks, tags index
Edit page for notebook?
if setting default notebook, can change that here
Editor extensions
checkbox
code block
plugins, e.g.
emoji
insert image
katex
