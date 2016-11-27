class User < ApplicationRecord
  has_many :likes
    
 # users.password_hash in the database is a :string
 include BCrypt

 has_secure_password

 def password
   @password ||= Password.new(password_hash)
 end

 def password=(new_password)
   @password = Password.create(new_password)
   self.password_hash = @password
 end

end
