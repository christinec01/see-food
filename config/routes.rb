Rails.application.routes.draw do
  resources :landings, :only => [:index, :create]
  resources :restaurants
  resources :users do
    resources :likes, :only => [:index, :destroy]
  end

  # resources :sessions

    # Session Routes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  post '/sendEmail' => 'restaurants#sendEmail'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'landings#index'
end
