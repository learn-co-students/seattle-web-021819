Rails.application.routes.draw do
  resources :cheeses
  # delete '/cheeses/:id', to: 'cheeses#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
