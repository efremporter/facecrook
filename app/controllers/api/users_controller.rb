class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show]

  def new
    @user = User.new
    render :new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @user.profile_picture.attach(io: File.open("/Users/efrem/Desktop/FaceCrook/app/assets/images/default-male-pic.jpeg"), filename: "Default")
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
      puts 'User not found'
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
