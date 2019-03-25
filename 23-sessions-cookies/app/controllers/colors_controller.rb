class ColorsController < ApplicationController

  def index
    @votes = 5
    @colors = Color.includes(:votes).all
  end

end
