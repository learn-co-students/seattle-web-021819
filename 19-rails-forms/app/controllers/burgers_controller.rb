class BurgersController < ApplicationController

  def index
    @burgers = Burger.all
  end

  def show
    @burger = Burger.find(params[:id])
  end

  def new
    @burger = Burger.new
  end

  def create
    # Burger.create(name: params[:name], price: params[:price], meat: params[:meat])
    Burger.create(burger_params)
    redirect_to burgers_path
  end

  def edit
    @burger = Burger.find(params[:id])
  end

  def update
    @burger = Burger.find(params[:id])
    @burger.update(burger_params)
    redirect_to @burger
  end

  private

  # def burger_path(burger)
  #   returns "/burgers/#{burger.id}"
  # end

  def burger_params
    # {... burger: {
    #   name: 'a new name',
    #   price: '10.50',
    #   meat: 'false'
    #   }
    # }
    params.require(:burger).permit(:name, :price, :meat)
  end


end
