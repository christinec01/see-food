class SessionsController < ApplicationController

  def new
     
  end

  def create
    # p "*" * 40
    # p params[:email]
    # p "*" * 40
    # p params[:password]
    # p "*" * 40
    user = User.find_by_email(params[:email])
    if request.xhr? && (user && user.authenticate(params[:password]))
        session[:user_id] = user.id
        p "*" * 40
        redirect_to restaurants_path
        # respond_to do |format|
        #   format.html { redirect_to '/'}
    else
      redirect_to '/'
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