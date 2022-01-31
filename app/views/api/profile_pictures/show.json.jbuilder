json.extract! @profile_picture, :id, :user_id
json.photoUrl url_for(@profile_picture.photo)