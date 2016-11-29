class RestaurantsController < ApplicationController

  include RestaurantsHelper

  def index
    @restaurants = search_by_zip(params[:format])
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
