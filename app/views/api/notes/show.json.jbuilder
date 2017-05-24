json.partial! 'note', note: @note
json.body @note.body
json.tag_names @note.tags.pluck(:name)
