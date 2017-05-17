class Notebook < ApplicationRecord
  validates :title, :author, presence: true
  belongs_to :author, class_name: :User
end
