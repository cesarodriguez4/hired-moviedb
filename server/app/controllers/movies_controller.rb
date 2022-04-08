# frozen_string_literal: true

# Movies Controller
class MoviesController < ApplicationController
  def index
    render json: { message: 'Moviedb API' }
  end

  def show
    movie_db = MovieDb.new(params[:language], params[:page])
    render json: movie_db.now_playing
  end
end
