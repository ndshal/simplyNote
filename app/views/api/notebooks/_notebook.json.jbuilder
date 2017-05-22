json.extract! notebook, :id, :title, :description, :updated_at
json.updated_str time_ago_in_words(notebook.updated_at)
