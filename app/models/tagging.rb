class Tagging < ApplicationRecord
  validates :note, :tag, presence: true
  validates :note, uniquness: { scope: :tag }

  belongs_to :tag
  belongs_to :note
end
