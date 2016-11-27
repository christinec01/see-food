class RestaurantsController < ApplicationController
  def index
    p "*"*20
    p params[:format]
    @restaurant = GooglePlaces::Client.new(ENV['GOOGLE_API_KEY'])
    @spots = @restaurant.spots_by_query(params[:format], types: 'restaurant')
    .select{|spot| spot if spot.photos.length > 0}

    @url = @spots.map do |spot|
      spot.photos[0].fetch_url(800)

    end

      # @url = @spots[6].photos[0].fetch_url(800)

  end
def show

end


end
