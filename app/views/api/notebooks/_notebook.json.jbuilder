json.extract! notebook, :id, :title, :description, :note_ids, :updated_at
json.updated_str time_ago_in_words(notebook.updated_at)
