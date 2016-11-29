Rails.application.routes.draw do
  resources :landings
  resources :restaurants
  resources :users

  resources :sessions

    # Session Routes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'landings#index'
end
