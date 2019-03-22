class BrewsController < ApplicationController

  def index
    @brews = Brew.all
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    # try to save it to hit the database
    # create, update, save
    # find a way to return true or false for the validity
    # valid?, save, update
    if @brew.save
      flash[:message] = 'Record Created!'
      redirect_to brew_path(@brew)
    else
      render :new
    end
  end

  def show
    @brew = Brew.find(params[:id])
    @purchase = Purchase.new
  end

  def edit
    @brew = Brew.find(params[:id])
  end

  def update
    @brew = Brew.find(params[:id])
    # @brew.attributes = brew_params
    if @brew.update(brew_params)
      # @brew.save
      flash[:message] = 'Record Update!'
      redirect_to @brew
    else
      render :edit
    end
  end

  def strongest
    @brews = Brew.order(strength: :desc).limit(3)
    render :index
  end

  private

  def brew_params
    params.require(:brew).permit!
  end
end
