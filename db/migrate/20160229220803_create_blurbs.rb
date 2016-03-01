class CreateBlurbs < ActiveRecord::Migration
  def change
    create_table :blurbs do |t|
      t.integer :city_id, null: false
      t.integer :traffic, null: false
      t.integer :weather, null: false
      t.integer :food, null: false
      t.integer :nightlife, null: false
      t.text :blurb, null: false	

      t.timestamps null: false
    end
    add_index :blurbs, :city_id
  end
end
