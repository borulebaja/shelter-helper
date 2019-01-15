class Shelter < ApplicationRecord
    has_many :needs
    belongs_to :user
    geocoded_by :address
    reverse_geocoded_by :latitude, :longitude #geocoded_by callback indicates what data is to be geocoded
    after_validation :geocode #after_validation callback will call geocode method to fetch coordinates based on the address

end
