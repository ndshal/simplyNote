class AddJsonBodyColToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :body, :jsonb, null: false
  end
end
