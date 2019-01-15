class CreateNeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :needs do |t|
      t.belongs_to :shelter
      t.string :title
      t.string :image_url
      t.string :description
      t.string :details
      t.timestamps
    end
  end
end
