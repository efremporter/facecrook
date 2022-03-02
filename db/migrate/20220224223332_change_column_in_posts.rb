class ChangeColumnInPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :my_profile
    add_column :posts, :profile_id, :integer
  end
end
