class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      signin!(@user)
      @user.generate_default_materials
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
