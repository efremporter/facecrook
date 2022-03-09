class Friend < ApplicationRecord
  validates :user_id, presence: true
  validates :friend_id, presence: true

  belongs_to :user, foreign_key: :user_id
  belongs_to :user, foreign_key: :friend_id
end
