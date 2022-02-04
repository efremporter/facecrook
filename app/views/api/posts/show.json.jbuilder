json.extract! @post, :id, :author_id, :body, :created_at
if @post.photo.attached?
  json.photoUrl url_for(@post.photo)
else
  json.photoUrl nil
end