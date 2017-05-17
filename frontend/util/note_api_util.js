export const fetchNotes = () => (
  $.ajax({
    method: 'get',
    url: '/api/notes'
  })
);

export const fetchNote = id => (
  $.ajax({
    method: 'get',
    url: `/api/notes/${id}`
  })
);

export const createNote = note => (
  $.ajax({
    method: 'post',
    url: '/api/notes',
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    method: 'patch',
    url: `api/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = id => (
  $.ajax({
    method: 'delete',
    url: `api/notes/${id}`
  })
);
