# frozen_string_literal: true

require 'uri'
require 'net/http'

# Third party service for Movie information
class MovieDb
  def initialize(language = 'en-US', page = 1)
    @api_key = ENV['MOVIE_DB_API_KEY']
    @base_url = 'https://api.themoviedb.org/3/'
    @language = language
    @page = page
  end

  def now_playing
    url = "#{@base_url}movie/now_playing?api_key=#{@api_key}&language=#{@language}&page=#{@page}"
    puts url
    uri = URI(url)
    res = Net::HTTP.get_response(uri)
    res.body
  end
end
