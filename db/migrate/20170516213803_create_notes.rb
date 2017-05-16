class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :notebook_id, null: false, index: true
      t.integer :author_id, null: false, index: true

      t.timestamps
    end
  end
end
