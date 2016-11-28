class SessionsController < ApplicationController

  def new
     
  end

  def login
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      respond_to do |format|
        format.html { redirect_to '/'}
      end
    end
  end

  def logged_in?
    session[:username] ? true : false
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end