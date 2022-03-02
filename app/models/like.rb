class Like < ApplicationRecord

  validates :liker_id, presence: true
  validates :post_id, presence: true

  belongs_to :user, foreign_key: :liker_id
  belongs_to :post, foreign_key: :post_id
  
end
