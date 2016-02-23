class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  private 
  def current_user
  	@current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
  	!!current_user
  end

  def login!(user)
  	@current_user = user
  	session[:session_token] = user.reset_token!
  end

  def logout!
  	current_user.try(:reset_token!)
  	session[:session_token] = nil
  end

  def require_signed_in!
  	redirect_to new_session_url unless signed_in?
  end
end
