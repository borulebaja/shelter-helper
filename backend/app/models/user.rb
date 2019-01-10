class User < ApplicationRecord
    has_many :shelter_locations
    has_secure_password
end
