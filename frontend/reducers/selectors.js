import { values } from 'lodash';

export const selectNotesByFilter = (notes, filter) => {
  let filteredNotes = [];
  let selectFunc = note => true;
  if(filter.object === 'notebook') {
    selectFunc = note => note.notebook_id === parseInt(filter.objectId);
  } else if (filter.object === 'tag') {
    selectFunc = note => note.tag_ids.includes(parseInt(filter.objectId));
  }

  for (let key in notes) {
    let note = notes[key]
    if (selectFunc(note)) {
      filteredNotes.push(note);
    }
  }

  return filteredNotes;
};

export const selectNoteTitlesByFilter = (notes, filter) => (
  selectNotesByFilter(notes, filter).map(note => note.title)
);

export const getObjectName = (state, filter) => {
  if(filter.object === 'notebook') {
    return state.notebooks.byId[filter.objectId].name;
  } else if (filter.object === 'tag') {
    return state.tags[filter.objectId].name;
  }

  return null;
};

export const getHeadingFromFilter = (state, filter) => {
  let heading = 'notes';
  let objectName = '';
  if (filter.object === 'notebook' && state.notebooks.byId[filter.objectId]) {
    objectName = state.notebooks.byId[filter.objectId].name;
    heading = `notebook: ${objectName}`;
  } else if (filter.object === 'tag' && state.tags[filter.objectId]) {
    objectName = state.tags[filter.objectId].name;
    heading = `tag: ${objectName}`;
  }

  return heading;
};

export const sortItemsByDate = items => {
  return items.sort(
    (a,b) => (new Date(b.updated_at) - new Date(a.updated_at))
  );
};

export const sortItemSliceByDate = itemSlice => (
  sortItemsByDate(values(itemSlice))
);

export const sortItemsByName = items => {
  return items.sort(
    (a,b) => {
      if(a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }
  );
};

export const sortItemSliceByName = itemSlice => {
  let items;
  if (itemSlice.byId) {
    items = values(itemSlice.byId);
  } else {
    items  = values(itemSlice);
  }

  return sortItemsByName(items);
};

export const sortItemSliceAlphabetically = itemSlice => {
  let sortedSlice = {};
  for (let key in itemSlice) {
    let item = itemSlice[key];
    const letterKey = item.name[0].toLowerCase();
    if (!sortedSlice[letterKey]) {
      sortedSlice[letterKey] = [];
    }
    sortedSlice[letterKey].push(item);
  }

  return sortedSlice;
}
