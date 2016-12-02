module RestaurantsHelper
  include HTTParty
  def enlarge_image(string)
    string.gsub(/([m][s][.][j][p][g])/, "o.jpg")
  end

  def search_by_zip(zip_code)
    client = Yelp::Client.new({
      consumer_key: ENV['CONSUMER_KEY'],
      consumer_secret: ENV['CONSUMER_SECRET'],
      token: ENV['TOKEN'],
      token_secret: ENV['TOKEN_SECRET']
    })

    client.search(zip_code, { term: "food", limit: 3 })
  end

  def search_image(image)
    headers = { "Authorization" => "Bearer #{ENV['IMAGE_TOKEN']}" }

    response = HTTParty.get(
      "https://api.clarifai.com/v1/tag/?model=general-v1.3&url=#{image}",
      :headers => headers
    )

    response.parsed_response
  end

  def grab_classes(array)
    array['results'][0]['result']['tag']['classes']
  end

  def image_filter(array)
    category = grab_classes(array)

    category.include?("food")
  end
end
