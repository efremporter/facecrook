class Post < ApplicationRecord

  validates :author_id, presence: true
  validates :profile_id, presence: true
  validates :body, presence: true

  belongs_to :user, foreign_key: :author_id
  has_many :comments, foreign_key: :post_id
  has_many :likes, foreign_key: :post_id
  has_one_attached :photo

end
