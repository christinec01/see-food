class User < ApplicationRecord
  has_secure_password
  has_many :likes

  validates :first_name, :last_name, :username, :email, :zip_code, presence: true
  validates :username, :email, uniqueness: true

  validates_format_of :zip_code,
                  with: /\A\d{5}-\d{4}|\A\d{5}\z/,
                  message: "should be 12345 or 12345-1234"
end
