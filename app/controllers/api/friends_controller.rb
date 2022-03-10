class Api::FriendsController < ApplicationController

  def index
    @friends = Friend.where(user_id: params[:user_id]) + Friend.where(friend_id: params[:user_id])

    if @friends
      render :index
    else
      render json: ['No friends found', status: 404]
    end
  end

  def show
    @friend = Friend.find(params[:id])

    if @friend
      render :show
    else
      render json: ['Friend not found', status: 404]
    end
  end

  def create
    @friend = Friend.new(friend_params)

    if @friend.save
      render :show
    else
      render json: ['Could not complete request', status: 400]
    end
  end

  def update 
    @friend = Friend.find(params[:id])

    if @friend
      @friend.update(friend_params)
      render :show
    else
      render json: ["Could not complete request"], status: 400
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
