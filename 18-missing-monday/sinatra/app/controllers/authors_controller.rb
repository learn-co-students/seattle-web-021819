class AuthorsController < ApplicationController
  set :views, 'app/views/authors'

  get '/authors' do
    @authors = Author.all
    erb :index
  end
end