class CreateShelterLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :shelter_locations do |t|
      t.string :name
      t.string :address
      t.decimal :latitude
      t.decimal :longitude
      t.belongs_to :user
      t.timestamps
    end
  end
end
