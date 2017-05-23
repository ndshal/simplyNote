class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :tagging
  has_many :notes, through: :tagging
end
