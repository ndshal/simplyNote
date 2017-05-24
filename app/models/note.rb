class Note < ApplicationRecord
  validates :title, :body, :notebook, :author, presence: true

  belongs_to :author, class_name: :User
  belongs_to :notebook
  has_many :taggings
  has_many :tags, through: :taggings

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name, author: self.author)
    end
  end
end
