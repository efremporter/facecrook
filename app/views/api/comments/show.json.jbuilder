json.extract! @comment, :id, :author_id, :post_id, :body, :created_at
if @comment.photo.attached?
  json.photoUrl url_for(@comment.photo)
else
  json.photoUrl nil
end