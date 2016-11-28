class Picture < ApplicationRecord
  belongs_to :restaurant
  has_many :likes
end
