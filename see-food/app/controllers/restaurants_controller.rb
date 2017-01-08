class RestaurantsController < ApplicationController

  include RestaurantsHelper

  def index
    @map_key = ENV['MAP_KEY']

      if User.where(id: params[:format]).length > 0
        @user = User.find(params[:format])
        @restaurants = search_by_zip(@user.zip_code)
      else
        @restaurants = search_by_zip(params[:format])
      end

    businesses = @restaurants.businesses.shuffle

    @spots = businesses.find_all { |spot| image_filter(search_image(spot.image_url)) }

    @url = @spots.map { |spot| enlarge_image(spot.image_url) }
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.save

    @like = Like.create(
      user_id: 1,
      restaurant_id: @restaurant.id
      )
  end

  def sendEmail
    ExampleMailer.sample_email(params).deliver_now
    render json: params

  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone_number, :picture_url)
  end
end
