const _dummyNotebook = {
  1: {
    id: 1,
    name: 'Default Notebook'
  }
};

const notebooksReducer = (state=_dummyNotebook, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default notebooksReducer;
