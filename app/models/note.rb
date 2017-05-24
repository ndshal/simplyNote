class Note < ApplicationRecord
  validates :title, :body, :notebook, :author, presence: true

  belongs_to :author, class_name: :User
  belongs_to :notebook
  has_many :taggings
  has_many :tags, through: :taggings

  def create_tags_from_names(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name, author: self.author)
    end
  end

  def body_preview
    words = self.body.split[0..10].join(' ')
    words.length < 40 ? words : self.body[0..40]
  end
end
