class CreateShelterLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :shelter_locations do |t|

      t.timestamps
    end
  end
end
