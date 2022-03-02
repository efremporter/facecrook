class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]

  def new 
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render "api/sessions/show.json.jbuilder"
    else
      render json: ['Invalid email/password combination'], status: 401
    end

  end

  def destroy
    logout!
  end

end
