class CreateBurgers < ActiveRecord::Migration[5.2]
  def change
    create_table :burgers do |t|
      t.boolean :meat
      t.string :name
      t.float :price

      t.timestamps
    end
  end
end
