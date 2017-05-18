@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body_preview
    json.updated_at time_ago_in_words(note.updated_at)
  end
end
