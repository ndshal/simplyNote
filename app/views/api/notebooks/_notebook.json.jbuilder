json.extract! note, :id, :title, :notebook_id, :updated_at
json.updated_str time_ago_in_words(note.updated_at)
