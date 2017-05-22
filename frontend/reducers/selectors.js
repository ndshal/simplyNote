import { values } from 'lodash';

export const selectNotesByFilter = (notes, filter) => {
  let filteredNotes = [];
  if (filter.object) {
    const filterName = `${filter.object}_id`;
    for (let key in notes) {
      let note = notes[key]
      if (note[filterName] ===  filter['id']) {
        filteredNotes.push(note);
      }
    }
  } else {
    filteredNotes = values(notes);
  }

  return filteredNotes;
};


export const sortItemsByDate = itemsSlice => {
  let items = values(itemsSlice);
  return items.sort(
    (a,b) => (new Date(b.updated_at) - new Date(a.updated_at))
  );
};
