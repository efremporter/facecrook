class Api::PostsController < ApplicationController

  def index
    if params[:profile_id]
      @posts = Post.where(profile_id: params[:profile_id]);
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
      puts "Post doesn't exist"
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      puts 'Post not saved'
    end

  end

  def edit
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      puts 'Post not found'
    end 
  end

  def destroy
    post = Post.find(params[:id])
    
    if post
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
    params.require(:post).permit(:profile_id, :author_id, :body, :photo)
  end
end
