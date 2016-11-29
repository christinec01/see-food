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

  def create
    # expecting a spot from front end
    p "*"* 50
    p params
    p "*"* 50
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.save
    p @restaurant

    @like = Like.create(
      user_id: 1,
      restaurant_id: @restaurant.id
      )

  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone_number, :picture_url)
  end


end
