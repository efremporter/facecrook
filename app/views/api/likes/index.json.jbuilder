@likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :post_id, :liker_id
  end
end