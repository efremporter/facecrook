class Api::ProfilePictureController < ApplicationController

  def show 
    @profile_picture = ProfilePicture.find()
  end

  def create 
    @profile_picture = ProfilePicture.new(picture_params)

    if @profile_picture.save
      render :show
    else
      puts 'Invalid picture'
    end
  end

  def edit 
    @profile_picture = ProfilePicture.update(picture_params)

    render :show
  end

  def picture_params 
    params.require(:profile_picture).permit(:user_id, :url)
  end
end