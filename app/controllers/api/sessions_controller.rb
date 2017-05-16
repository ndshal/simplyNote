class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      signin!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 422
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
