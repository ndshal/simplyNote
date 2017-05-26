```js
{
  currentUser: {
    id: 1,
    username: 'john'
  },
  errors: {
    signin: [],
    signup: [],
    createNote: ["Title can\'t be blank"]
  },
  notes: {
    1: {
      id: 1,
      title: 'Note 1',
      notebook_id: 1,
      tag_ids: [1,2]
    }
  },
  noteDetail {
    id: 1,
    title: 'Note 1',
    body: { ... }
    notebook_id: 1,
    tag_names: ['cool', 'redux'],
  },
  notebooks: {
    byId: {
      1: {
        id: 1,
        name: 'Notebook 1',
        description: ""
      }  
    },
    defaultId: 1
  },
  tags: {
    1: {
      id: 1,
      name: 'cool'
    },
    2: {
      id: 1,
      name: 'redux'
    }
  }
}
```
