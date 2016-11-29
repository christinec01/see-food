module RestaurantsHelper
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

    client.search(zip_code, { term: "food" })
  end
end
