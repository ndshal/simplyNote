class AddAuthorToTags < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :author_id, :integer, null: false, index: true
  end
end
