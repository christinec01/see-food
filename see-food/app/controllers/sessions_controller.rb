class SessionsController < ApplicationController

  def new
     
  end

  def login
    p sessions.inspect
    p params.inspect
    user = User.find_by_email(params[:email])
    p sessions.inspect
    if request.xhr? && user && user.authenticate(params[:password])
    p sessions.inspect
        session[:user_id] = user.id
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

end