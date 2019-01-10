class CreateShelterLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :shelter_locations do |t|
      t.string :name
      t.string :address
      t.decimal :latitude, :precision => 15, :scale => 13
      t.decimal :longitude, :precision => 15, :scale => 13
      t.belongs_to :user
      t.timestamps
    end
  end
end
