class CreateCheeses < ActiveRecord::Migration[5.2]
  def change
    create_table :cheeses do |t|
      t.string :name
      t.integer :stinkiness
      t.string :cheese_type
      t.string :milk

      t.timestamps
    end
  end
end
