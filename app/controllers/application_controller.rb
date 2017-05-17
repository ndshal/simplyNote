class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in
    !!current_user
  end

  def signin!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def signout!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_logged_in
    if !logged_in
      render json: ['Must be logged in to access notes'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
