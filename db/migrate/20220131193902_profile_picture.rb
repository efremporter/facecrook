class ProfilePicture < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_pictures do |t|
      t.integer :user_id, null: false
      t.string :url
      t.timestamps
    end
    add_index :profile_pictures, :user_id
  end
end
