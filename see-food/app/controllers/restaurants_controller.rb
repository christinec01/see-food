class RestaurantsController < ApplicationController
  def index
    client = Yelp::Client.new({ consumer_key: ENV['CONSUMER_KEY'],
                            consumer_secret: ENV['CONSUMER_SECRET'],
                            token: ENV['TOKEN'],
                            token_secret: ENV['TOKEN_SECRET']
                          })

    @restaurants = client.search(params[:format], { term: 'food' })

    @spots = @restaurants.businesses

    @url = @spots.map { |spot| spot.image_url }

  end

  def show

  end


end
