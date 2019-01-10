class CreateNeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :needs do |t|
      t.belongs_to :shelter_location
      t.string :name_of_needs
      t.timestamps
    end
  end
end
