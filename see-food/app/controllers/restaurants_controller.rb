class RestaurantsController < ApplicationController
  def index
    # @restaurant = GooglePlaces::Client.new(ENV['GOOGLE_API_KEY'])
    # @spots = @restaurant.spots_by_query(params[:format], types: 'restaurant')
    # .select{|spot| spot if spot.photos.length > 0 && spot.opening_hours['open_now'] == true}
    #
    # #logic here to restrict spot.image based on yelp.category
    # @url = @spots.map do |spot|
    #   spot.photos[0].fetch_url(800)
    # end

    client = Yelp::Client.new({ consumer_key: ENV['CONSUMER_KEY'],
                            consumer_secret: ENV['CONSUMER_SECRET'],
                            token: ENV['TOKEN'],
                            token_secret: ENV['TOKEN_SECRET']
                          })

    @restaurant = client.search('San Francisco', { term: 'food' })

    p @restaurant

  end

  def show

  end


end
