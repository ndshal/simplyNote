class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :author, presence: true

  belongs_to :author, class_name: :User
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings
end
