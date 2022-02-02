json.extract! @user, :id, :first_name, :last_name, :email
if @user.profile_picture.attached?
  json.photoUrl url_for(@user.profile_picture)
else
  json.photoUrl nil
end