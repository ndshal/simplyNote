@notes.each do |note|
  json.set! note.id do
    json.partial! 'note', note: note
    json.tag_ids note.tag_ids
  end
end
