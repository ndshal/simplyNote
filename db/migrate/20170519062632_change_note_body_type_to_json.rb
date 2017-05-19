class ChangeNoteBodyTypeToJson < ActiveRecord::Migration[5.0]
  def change
    remove_column :notes, :body
  end
end
