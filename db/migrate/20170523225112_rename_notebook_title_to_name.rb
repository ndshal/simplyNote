class RenameNotebookTitleToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :notebooks, :title, :name
  end
end
