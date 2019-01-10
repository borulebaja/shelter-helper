class ShelterLocation < ApplicationRecord
    has_many :needs
    belongs_to :user
    geocoded_by :address
    reverse_geocoded_by :latitude, :longitude #geocoded_by callback indicates what data is to be geocoded
    after_validation :geocode, if: ->(obj){ obj.address_changed? } #after_validation callback will call geocode method to fetch coordinates based on the address


  # private

  # def address_changed?
  #   address.present? && address_changed?
  # end

end
