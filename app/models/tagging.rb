class Tagging < ApplicationRecord
  validates :note, :tag, presence: true
  validates :note, uniqueness: { scope: :tag }

  belongs_to :tag
  belongs_to :note
end
