class BurgersController < ApplicationController
  before_action :set_burger, only: [:show, :edit, :update]


  def index
    @burgers = Burger.all
  end

  def show
  end

  def new
    @burger = Burger.new
    # @restaurants = Restaurant.first(2)
  end

  def create
    # Burger.create(name: params[:burger][:name], price: params[:burger][:price], meat: params[:burger][:meat])
    # Burger.create(params[:burger])
    Burger.create(burger_params)
    redirect_to burgers_path
  end

  def edit
  end

  def update
    @burger.update(burger_params)
    redirect_to @burger
  end

  private

  # def burger_path(burger)
  #   returns "/burgers/#{burger.id}"
  # end

  def burger_params
    params.require(:burger).permit(:name, :price, :meat, :restaurant_id)
  end

  def set_burger
    @burger = Burger.find(params[:id])
  end


end













