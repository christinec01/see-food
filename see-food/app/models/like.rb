class Like < ApplicationRecord
  belongs_to :user
  belongs_to :picture
  has_one :restaurant, through: :picture
end
