Rails.application.routes.draw do
  resources :students
  # only: [:new, :create, :edit, :update, :index, :show, :delete]
  # HTTP VERB PATH/URI      CONTROLLER METHOD
  get '/students', to: 'students#index'
  get '/students/:name', to: 'students#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
