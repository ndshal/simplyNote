export const fetchAllNotebook = () => (
  $.ajax({
    method: 'get',
    url: 'api/notebooks',
  })
);

export const createNotebook = notebook => (
  $.ajax({
    method: 'post',
    url: 'api/notebooks',
    data: { notebook }
  })
);

export const deleteNotebook = id => (
  $.ajax({
    method: 'delete',
    url: `api/notebooks/${id}`
  })
);
