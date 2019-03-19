class AddRestaurantIdToBurgers < ActiveRecord::Migration[5.2]
  def change
    add_column :burgers, :restaurant_id, :integer
  end
end
