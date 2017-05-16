class Note < ApplicationRecord
  validates :title, :body, :author, :notebook, presence: true
  belongs_to :author, className: User
end
