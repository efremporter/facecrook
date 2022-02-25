class Api::PostsController < ApplicationController

  def index
    @all_posts = Post.all
    # user = User.find_by_id(params[:author_id])
    # print params[:profile_id]
    @posts = Post.where(profile_id: params[:profile_id]);
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
      post.photo.delete
      # post.delete
    else
      puts 'Post not found, therefore not deleted'
    end
  end

  def post_params 
    params.require(:post).permit(:profile_id, :author_id, :body, :photo)
  end
end
