class Purchase < ApplicationRecord
  belongs_to :brew

  validates :customer_name, presence: true
  validates :price, numericality: {greater_than: 0}
end
