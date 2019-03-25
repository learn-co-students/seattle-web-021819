class ApplicationController < ActionController::Base
  helper_method :can_vote?

  private

  def vote_count
    session[:votes].to_i
  end

  def can_vote?
    vote_count > 0
  end

  def decrement_votes
    session[:votes] = vote_count - 1
  end

  def set_votes
    session[:votes] ||= 5
  end

end
