class CreateFries < ActiveRecord::Migration[5.2]
  def change
    create_table :fries do |t|
      t.integer :saltiness
      t.boolean :sweet_potato
      t.boolean :curly

      t.timestamps
    end
  end
end
