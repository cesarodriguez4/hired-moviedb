Rails.application.routes.draw do
  root 'movies#index'
  get 'movies/show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
end
