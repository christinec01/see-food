class LandingsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index

  end

  def create
    p params
    redirect_to restaurants_path(params[:zip])

  end

end
