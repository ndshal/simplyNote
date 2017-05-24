class Api::NotebooksController < ApplicationController
  before_action :ensure_logged_in

  def index
    @notebooks = Notebook.includes(:notes).where(author_id: current_user.id)
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author = current_user

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find_by(id: params[:id])
    if @notebook
      @notebook.destroy
      render :show
    else
      render json: ['Notebook not found'], status: 404
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name, :description, :author_id)
  end

end
