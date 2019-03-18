Rails.application.routes.draw do
  resources :hot_dogs
  resources :authors
  # resources :books
  get '/books', to: 'books#index'
  get '/book/:id', to: 'books#show'
  post '/books', to: 'books#create'
  get '/books/new', to: 'books#new'
  get '/books/:id/edit', to: 'books#edit'
  patch '/books/:id', to: 'books#update'
  delete '/books/:id', to: 'books#destroy'
  get '/films', to: 'films#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # authors/:id/book
end
