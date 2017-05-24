class Notebook < ApplicationRecord
  validates :name, :author, presence: true
  belongs_to :author, class_name: :User
  has_many :notes
end
