json.extract! notebook, :id, :title, :desciption, :updated_at
json.updated_str time_ago_in_words(notebook.updated_at)
