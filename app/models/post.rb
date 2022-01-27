class Post < ApplicationRecord

  validates :author_id, presence: true
  validates :body, presence: true

  belongs_to :user, foreign_key: :author_id

end
