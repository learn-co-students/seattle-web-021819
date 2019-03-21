class CheesesController < ApplicationController

  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new()
    @milks = ['cow', 'goat', 'sheep', 'almond', 'cashew']
  end

  def create
    @cheese = Cheese.new(cheese_params)
    if @cheese.save
      # @cheese.save
      redirect_to cheeses_path
    else
      # flash[:errors] = @cheese.errors.full_messages
      render :new
      # redirect_to new_cheese_path
    end
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def update
    @cheese = Cheese.find(params[:id])
    byebug
    if @cheese.update(cheese_params)
      redirect_to @cheese
    else
      render :edit
    end
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_path
  end

  private

  def cheese_params
    params.require(:cheese).permit(:name, :stinkiness, :cheese_type, :milk)
  end
end
