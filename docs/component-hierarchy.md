## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**Nav**
  - Sidebar
  - HomeContainer
   + Home

**Home**
  - Index
    + NotesIndex
    + NotebooksIndex
    + TagsIndex
  - NoteDetailContainer

**NoteDetailContainer**
  - NoteDetail
    + NoteDetailHeader
      - Tag
    + NoteDetailEditor
      - EditorTools
      - Editor

**NoteIndexContainer**
  - NotesIndex
    + NoteIndexHeader
    + NoteIndexItem
    + NoteFormContainer
     - NoteForm

**NotebooksIndexContainer**
  - NotebooksIndex
    + NotebooksIndexHeader
    + NotebooksIndexItem
    + NotebookFormContainer
     - NotebookForm

**TagsIndexContainer**
  - TagsIndex  
    + TagsIndexHeader
    + TagsIndexItem
      - Tag
    + TagFormContainer
     - TagForm


  ## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/notes/:noteId", "/home/notebook/:notebookId/notes/:noteId", "/home/tag/:tagId/notes/:noteId" | "NotesIndexContainer", "NoteDetailContainer" |
| "/home/notes/:noteId/show" | "NoteDetailContainer" (hide nav and index)|
| "/home/notes/new" | "NoteFormContainer" |
| "/home/notebooks" | "NotebooksIndexContainer" |
| "/home/notebooks/new" | "NotebookFormContainer" |
| "/home/tags" | "TagsIndexContainer" |
| "/home/tags/new" | "TagFormContainer" |
