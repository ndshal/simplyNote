export const fetchAllTags = () => (
  $.ajax({
    method: 'get',
    url: 'api/tags',
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'post',
    url: 'api/tags',
    data: { tag }
  })
);

export const deleteTag = id => (
  $.ajax({
    method: 'delete',
    url: `api/tags/${id}`
  })
);
