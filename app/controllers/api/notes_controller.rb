class Api::NotesController < ApplicationController
  before_action :ensure_logged_in

  def index
    @notes = Note.where(author_id: current_user.id)
    if params[:filter]
      @notes = @notes.where(
        "#{params[:filter][:object]}_id = #{params[:filter][:objectId]}"
      )
    end
  end

  def show
    @note = Note.find_by(id: params[:id])
  end

  def create
    @note = Note.new(note_params)
    @note.author = current_user
    # # garbage
    @note.notebook = Notebook.last
    # #
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by(id: params[:id])
    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    if @note
      @note.destroy
      render :show
    else
      render json: ['Note not found'], status: 404
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :author_id)
  end
end
