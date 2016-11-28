class RestaurantsController < ApplicationController
  def index

    def enlarge_image(string)
      string.gsub(/([m][s][.][j][p][g])/, "o.jpg")
    end

    client = Yelp::Client.new({ consumer_key: ENV['CONSUMER_KEY'],
                            consumer_secret: ENV['CONSUMER_SECRET'],
                            token: ENV['TOKEN'],
                            token_secret: ENV['TOKEN_SECRET']
                          })

    @restaurants = client.search(params[:format], { term: 'food'})

    @spots = @restaurants.businesses.select { |spot| spot.is_closed == false }

    @url = @spots.map { |spot| enlarge_image(spot.image_url) }
  end

  def show

  end


end
