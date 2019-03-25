class VotesController < ApplicationController

  def create
    if can_vote?
      decrement_votes
      @vote = Vote.create(color_id: params[:color_id])
    end

    redirect_to colors_path
  end

end
