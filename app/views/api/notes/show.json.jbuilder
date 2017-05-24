json.partial! 'note', note: @note
json.body @note.body
json.tags @note.tags.pluck(:name)
