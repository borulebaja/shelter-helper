class CreateNeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :needs do |t|
      t.belongs_to :shelter_location
      t.boolean :true
      t.timestamps
    end
  end
end
