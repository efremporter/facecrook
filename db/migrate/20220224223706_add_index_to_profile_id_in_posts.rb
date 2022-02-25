class AddIndexToProfileIdInPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :profile_id
    add_column :posts, :profile_id, :integer, null: false
    add_index :posts, :profile_id, unique: true
  end
end
