class Api::LikesController < ApplicationController

  def index
    if params[:liker_id]
      @likes = Like.where(liker_id: params[:liker_id])
    elsif params[:post_id]
      @likes = Like.where(post_id: params[:post_id])
    end

    render :index
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: ["Could not complete request"], status: 400
    end
  end

  def destroy 
    like = Like.find(post_id: params[:post_id])
    if like
      like.delete
    else
      render json: ["Could not complete request"], status: 400
    end
  end
  
  def like_params
    params.require(:like).permit(:liker_id, :post_id)
  end
end
