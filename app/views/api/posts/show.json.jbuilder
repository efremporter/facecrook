json.extract! @post, :id, :author_id, :body
if @post.photo.attached?
  json.photoUrl url_for(@post.photo)
end