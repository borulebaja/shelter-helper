class CreateShelters < ActiveRecord::Migration[5.2]
  def change
    create_table :shelters do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :phone
      t.string :image_url
      t.decimal :latitude, :precision => 15, :scale => 13
      t.decimal :longitude, :precision => 15, :scale => 13
      t.belongs_to :user
      t.timestamps
    end
  end
end
