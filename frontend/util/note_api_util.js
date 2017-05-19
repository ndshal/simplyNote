export const fetchAllNotes = filter => (
  $.ajax({
    method: 'get',
    url: 'api/notes',
    data: {filter}
  })
);

export const fetchSingleNote = id => (
  $.ajax({
    method: 'get',
    url: `api/notes/${id}`
  })
);

export const createNote = note => (
  $.ajax({
    method: 'post',
    url: 'api/notes',
    data: { note }
  })
);

export const updateNote = note => {
  return $.ajax({
    method: 'patch',
    url: `api/notes/${note.id}`,
    data: { note }
  })
};

export const deleteNote = id => (
  $.ajax({
    method: 'delete',
    url: `api/notes/${id}`
  })
);
