@notebooks.each do |notebook|
  json.byId do
    json.set! notebook.id do
      json.partial! 'notebook', notebook: notebook
    end
  end
  json.defaultId @default_id
end
