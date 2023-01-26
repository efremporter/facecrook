class Api::PostsController < ApplicationController

  def index
    if params[:profile_id]
      @posts = Post.where(profile_id: params[:profile_id]);
    elsif params[:friend_id]
      users = Friend.where(user_id: params[:friend_id]) 
      @posts = []
      users.each do |user|
        @posts += Post.where(author_id: user.user_id)
        @posts += Post.where(author_id: user.friend_id)
      end
    else
      @posts = Post.all
    end
    render :index
  end
  
  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else  
      render json: ["Post doesn't exist"], status: 404
    end
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: ['Post not saved'], status: 400
    end

  end

  def edit
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: ['Post not found'], status: 404
    end 
  end

  def destroy
    post = Post.find(params[:id])
    
    if post
      comments = Comment.where(post_id: params[:id])
      likes = Like.where(post_id: params[:id])

      if comments
        comments.each do |comment|
          if comment.photo.attached?
            comment.photo.delete
          end
          comment.delete
        end
      end
      
      if likes
        likes.each { |like| like.delete}
      end

      if post.photo.attached?
        post.photo.delete
      end

      post.delete
      render json: ['Post deleted'], status: 200
    else
      render json: ['Post not found'], status: 404
    end
  end

  def post_params 
    params.require(:post).permit(:profile_id, :author_id, :friend_id, :body, :photo)
  end
end
