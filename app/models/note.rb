class Note < ApplicationRecord
  validates :title, :body, presence: true
end
