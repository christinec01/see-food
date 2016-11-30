class LikesController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
  	@user = User.find(params[:user_id])

  	debug
		@restaurants = @user.likes.map {|like| like.restaurant }
  	debug
  end

  def destroy
    
  end

end