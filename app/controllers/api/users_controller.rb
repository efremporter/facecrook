class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show]

  def new
    @user = User.new
    render :new
  end
  
  def create
    puts 'controller'
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      puts 'controller'
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end

  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else  
      redirect_to new_session_url
    end
  end

  def index
    @users = User.all
    render :index
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
