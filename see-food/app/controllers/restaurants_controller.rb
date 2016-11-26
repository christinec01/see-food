class RestaurantsController < ApplicationController

  def index
    @restaurant = GooglePlaces::Client.new(ENV['GOOGLE_API_KEY'])
    @spots = @restaurant.spots(34.2746, -119.2290, types: 'restaurant')

    # respond_to do |f|
    #   f.html { render json: spots }
    # end
  end

end
