class Api::NotesController < ApplicationController
  before_action :ensure_logged_in

  def index
    @notes = Note.includes(:tags).where(author_id: current_user.id)
  end

  def show
    @note = Note.find_by(id: params[:id])
  end

  def create
    params[:note][:tag_names] ||= []

    @note = Note.new(note_params)
    @note.author = current_user
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    params[:note][:tag_names] ||= []

    @note = Note.find_by(id: params[:id])
    if @note.update_attributes(note_params)
      @note.updated_at = Time.now
      # adding tags is note updating the note object
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
    params.require(:note)
      .permit(:title, :body, :notebook_id, :author_id, tag_names: [])
  end
end
