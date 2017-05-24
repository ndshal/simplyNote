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

export const sortItemsByDate = items => {
  return items.sort(
    (a,b) => (new Date(b.updated_at) - new Date(a.updated_at))
  );
};

export const sortItemSliceByDate = itemSlice => (
  sortItemsByDate(values(itemSlice))
);

export const sortItemsByTitle = items => {
  return items.sort(
    (a,b) => {
      if(a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  );
};

export const sortItemSliceByTitle = itemSlice => (
  sortItemsByTitle(values(itemSlice))
);

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
