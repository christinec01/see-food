class SessionsController < ApplicationController

  def create
    if !params[:email] || !params[:password]
      render json: {errors: ["Need params"]}, status: 400
      return
    end

    @user = User.find_by_email(params[:email])

    if (@user && @user.authenticate(params[:password]))
        session[:user_id] = @user.id

        redirect_to restaurants_path(@user)
    else
      render json: {errors: ["Email or Password is not correct"]}, status: 400
    end
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
