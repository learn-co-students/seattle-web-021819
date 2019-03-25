Rails.application.routes.draw do
  resources :students, only: [:show, :new, :index, :create]
  root 'students#index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#destroy', as: :logout
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
