class ProfileCoverPhoto < ActiveRecord::Migration[5.2]

def change
    create_table :profile_cover_photo do |t|
      t.integer :user_id, null: false
      t.string :url
      t.timestamps
    end
    add_index :profile_cover_photo, :user_id
  end

end
