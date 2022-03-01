class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id]);
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    
    if @comment.save {
      render :show
    } else {
      render json: ['Could not create comment'], status: 401
    }
  end

  def destroy
    comment = Comment.find(params[:id])
    
    if comment
      if comment.photo.attached?
        comment.photo.delete
      end
      comment.delete
      render json: ['Comment deleted'], status: 200
    else
      render json: ['Comment not found'], status: 404
    end
  end
  
  def comment_params 
    params.require(:comment).permit(:post_id, :author_id, :body, :photo)
  end
end
