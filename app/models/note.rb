class Note < ApplicationRecord
  validates :title, :body, :notebook, :author, presence: true

  belongs_to :author, class_name: :User
  belongs_to :notebook
  has_many :taggings
  has_many :tags, through: :taggings

  def body_preview
    words = self.body.split[0..10].join(' ')
    words.length < 40 ? words : self.body[0..40]
  end
end
