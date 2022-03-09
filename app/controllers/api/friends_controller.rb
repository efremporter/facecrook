class Api::FriendsController < ApplicationController

  def index
    if (params[:user_id] && params[:friend_id])
      @friend = Friend.find_by(user_id: params[:user_id], friend_id: params[:friend_id])
    else
      @friends = Friend.where(user_id: params[:user_id])
    end

    if @friends
      render :index
    elsif @friend
      render :show
    else
      render json: ['No friends found', status: 404]
    end
  end

  def show
    @friend = Friend.find_by(params[:user_id], params[:friend_id])

    if @friend
      render :show
    else
      render json: ['Friend not found', status: 404]
    end
  end

  def create
    @friend = Friend.new(params)

    if @friend.save
      render :show
    else
      render json: ['Could not complete request', status: 400]
    end
  end

  def destroy 

    friend = Friend.find(params[:id])
    
    if friend
      friend.delete
    else
      render json: ["Could not complete request"], status: 400
    end
  end

  private
  def friend_params
    params.require(:friend).permit(:user_id, :friend_id, :status)
  end

end
