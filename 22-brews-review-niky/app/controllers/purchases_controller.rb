class PurchasesController < ApplicationController

  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.new(purchase_params)
    if @purchase.save
      redirect_to @purchase.brew
    else
      render :new
    end
  end

  def show
    @purchase = Purchase.find(params[:id])
  end

  private
  def purchase_params
    params.require(:purchase).permit!
  end
end
