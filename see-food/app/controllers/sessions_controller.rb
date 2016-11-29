class SessionsController < ApplicationController

  def new
     
  end

  def create
    if !params[:email] || !params[:password]
      render json: {errors: ["Need params"]}, status: 400
      return
    end
        p "*" * 40

    @user = User.find_by_email(params[:email])

    if (@user && @user.authenticate(params[:password]))
        session[:user_id] = @user.id
        p "0" * 40
        redirect_to restaurants_path(@user.zip_code)
    else
      render json: {errors: ["Email or Password is not correct"]}, status: 400
    end
  end

  def logged_in?
    session[:username] ? true : false
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

  private

  # def user_params
  #   params.require(params).permit(:email, :password)
  # end 

end