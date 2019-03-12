class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    'Welcome to BookTown'
  end

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/:id' do
    # Book.find(params[:id])
    @book = Book.find_by(params)
    erb :show
  end

end
