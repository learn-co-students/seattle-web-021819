Rails.application.routes.draw do
  # resources :restaurants
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :burgers
  # get '/burgers/:id', to: 'burgers#show'
  # delete '/burgers/:id', to: 'burgers#destroy'
end
