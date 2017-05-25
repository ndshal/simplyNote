class AddIsDefaultToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :is_default, :boolean, default: false
  end
end
