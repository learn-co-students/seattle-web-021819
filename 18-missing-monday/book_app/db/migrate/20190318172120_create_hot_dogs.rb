class CreateHotDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :hot_dogs do |t|
      t.boolean :mustard

      t.timestamps
    end
  end
end
