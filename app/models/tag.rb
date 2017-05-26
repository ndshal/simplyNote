class Tag < ApplicationRecord
  validates :name, :author, presence: true
  validates :name, uniqueness: {scope: :author}

  belongs_to :author, class_name: :User
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings
end
