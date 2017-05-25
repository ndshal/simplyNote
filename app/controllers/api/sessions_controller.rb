class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    if !@user
      render json: ['Username does not exist'], status: 422
    elsif !@user.is_password?(params[:user][:password])
      render json: ['Password is invalid'], status: 422
    else
      signin!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if logged_in
      signout!
      render json: {}
    else
      render json: ['No user is logged in'], status: 422
    end
  end

end
