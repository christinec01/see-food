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

    @restaurants = client.search(params[:format], { term: 'food', limit: 1 })

    @spots = @restaurants.businesses.select { |spot| spot.is_closed == false }

    @url = @spots.map { |spot| enlarge_image(spot.image_url) }

  end

  def create
    # expecting a spot from front end
    @restaurant = Restaurant.new(
      name: params[:name],
      address: params[:address],
      phone_number: params[:phone_number],
      website: params[:website],
      picture_url: params[:picture_url]
      )
    @restaurant.save

    @like = Like.create(
      user_id: current_user.id,
      restaurant_id: @restaurant.id
      )

  end


end
