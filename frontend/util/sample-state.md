```js
{
  currentUser: {
    id: 1,
    username: 'john'
  },
  errors: {
    signin: [],
    signup: [],
    createNote: []
  },
  notes: {
    1: {
      id: 1,
      title: 'Note 1',
      body_preview: 'Body 1',  // 100 char preview of body
      notebook_id: 1,
      tag_ids: [1,2,3]
    }
  },
  notebooks: {
    1: {
      id: 1,
      title: 'Notebook 1',
      description: ""
    }
  },
  tags: {
    1: { id: 1, name: 'cool' },
    2: { id: 1, name: 'redux' },
    3: { id: 1, name: 'cats' }
  }
}
```
