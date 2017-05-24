class Api::TagsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @tags = Tag.includes(:notes).where(author_id: current_user.id)
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.author = current_user

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ['Tag not found'], status: 404
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :author_id)
  end

end
