class ColorsController < ApplicationController

  def index
    # if cookies[:votes]
    #   @votes = cookies[:votes]
    # else
    #   cookies[:votes] = 5
    # end
    set_votes

    @votes = vote_count
    @colors = Color.includes(:votes).all
    render :index
  end

end
