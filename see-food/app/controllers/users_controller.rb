class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = current_user
    respond_to do |format|
      format.html {render json: @user}
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :password, :password_confirmation, :email)
  end

end