class Comment < ApplicationRecord

  validates :author_id, presence: true
  validates :post_id, presence: true
  validates :body, presence: true

  belongs_to :user, foreign_key: :author_id
  belongs_to :post, foreign_key: :post_id
  
  has_one_attached :photo

end
