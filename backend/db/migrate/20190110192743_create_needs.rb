class CreateNeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :needs do |t|
      t.belongs_to :shelter
      t.string :title
      t.string :image_url
      t.string :description
      t.string :details
      t.integer :quantity_needed
      t.integer :quantity_bought
      t.timestamps
    end
  end
end
