class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show, :update]

  def new
    @user = User.new
    render :new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @user.profile_picture.attach(io: File.open("/Users/efrem/Desktop/FaceCrook/app/assets/images/default-male-pic.jpg"), filename: "Default")
      render :_user
    else
      render json: ['User not created'], status: 401
    end

  end

  def show
    @user = User.find(params[:id])
    if @user
      render :_user
    else  
      render json: ['User not found'], status: 404
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user
      if (params[:user][:profile_picture])
        @user.profile_picture.attach(params[:user][:profile_picture])
      end
      if (params[:user][:profile_cover_photo])
        @user.profile_cover_photo.attach(params[:user][:profile_cover_photo])
      end
      if (!params[:user][:profile_picture] || !params[:user][:profile_cover_photo])
        @user.update(user_params)
      end
      render :_user
    else  
      render json: ["Couldn't update user"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :profile_picture, :profile_cover_photo)
  end

end
