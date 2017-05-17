class Note < ApplicationRecord
  validates :title, :body, :notebook, :author, presence: true

  belongs_to :author, class_name: :User
  belongs_to :notebook
end
