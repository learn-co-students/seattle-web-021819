class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    'Welcome to BookTown'
  end


  #INDEX
  get '/books' do
    @books = Book.all
    erb :index
  end

  # CREATE
  get '/books/new' do
    erb :new
  end

  post '/books' do
    Book.create(params)
    redirect '/books'
  end

  #SHOW
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  # UPDATE
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(params[:book])
    redirect "/books/#{book.id}"
  end



















end
