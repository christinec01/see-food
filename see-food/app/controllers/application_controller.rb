class ApplicationController < ActionController::Base
<<<<<<< Updated upstream
  protect_from_forgery with: :null_session

=======
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session,
      if: Proc.new { |c| c.request.format =~ %r{application/json} }
      	
>>>>>>> Stashed changes
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

end
