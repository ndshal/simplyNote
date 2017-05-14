```js
{
  currentUser: {
    id: 1,
    username: 'john'
  },
  forms: {
    signin: { errors: [] },
    signup: { errors: [] }.
    createNote: { errors: [] }
  },
  notes: {
    1: {
      title: 'Note 1',
      body: 'Body 1',  //this will be html when in RTF (?)
      notebook_id: 1,
      tag_ids: [1,2,3]
    }
  },
  notebooks: {
    1: {
      title: 'Notebook 1',
      description: ""
    }
  },
  tags: {
    1: { name: 'cool' },
    2: { name: 'redux' },
    3: { name: 'cats' }
  }
}
```
