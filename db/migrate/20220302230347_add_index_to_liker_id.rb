class AddIndexToLikerId < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :liker_id
  end
end
