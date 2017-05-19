json.extract! note, :id, :title, :notebook_id
json.updated_at time_ago_in_words(note.updated_at)
