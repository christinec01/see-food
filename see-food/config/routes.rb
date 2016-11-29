Rails.application.routes.draw do
  resources :landings
  resources :restaurants
  resources :users
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'landings#index'
end
