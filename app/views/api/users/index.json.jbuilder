@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :first_name, :last_name, :email
    if user.profile_picture.attached?
      json.profilePictureUrl url_for(user.profile_picture)
    else
      json.profilePictureUrl nil
    end

    if user.profile_cover_photo.attached?
      json.coverPhotoUrl url_for(user.profile_cover_photo)
    else
      json.coverPhotoUrl nil
    end
  end
end