class User < ApplicationRecord
    has_many :shelters
    has_secure_password
end
